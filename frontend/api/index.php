<?php

$url = (isset($_GET['q'])) ? $_GET['q'] : '';
$url = rtrim($url, '/');
$urls = explode('/', $url);

$router = $urls[0];

// Получение данных из тела запроса
function getFormData($methodRequest) {

    // GET или POST: данные возвращаем как есть
    if ($methodRequest === 'GET') return $_GET;
    //без json decode не обрабатываются axios запросы
    if ($methodRequest === 'POST') return $_POST = json_decode(file_get_contents("php://input"),true);

    // PUT, PATCH или DELETE
    $data = array();
    $exploded = explode('&', file_get_contents('php://input'));

    foreach($exploded as $pair) {
        $item = explode('=', $pair);
        if (count($item) == 2) {
            $data[urldecode($item[0])] = urldecode($item[1]);
        }
    }

    return $data;
}

/*if (!function_exists('http_response_code')) {
    function http_response_code($code = NULL)
    {

    }
}*/


$method = $_SERVER['REQUEST_METHOD'];
$dataRequest = getFormData($method);
//print_r($dataRequest);

class Api{
    public $data = "";
    public function __construct(array $dataRequest = array(), array $urls = array()) {
        $this->data = $dataRequest;
        $this->url = $urls;
    }

    public function sendRequest($url, $fields = array(), $method = 'get', $config = array()){
        $service_url = 'http://ac-srv2.akvacity.ru/ServiceIntegration/hs' . $url;

        if ($method == 'get') {
            $service_url .= "?".http_build_query($fields);
        }

        $_config = array(
            CURLOPT_URL => $service_url,
            CURLOPT_URL => $service_url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HEADER => false,
            CURLOPT_TIMEOUT => 15,
            CURLOPT_AUTOREFERER => true,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_SSL_VERIFYHOST => false,
            CURLOPT_USERPWD => "ac-site:To0JU1co",
            CURLOPT_HTTPAUTH => CURLAUTH_BASIC
        );

        if ($method == 'post') {
            $fields = json_encode($fields);
            $_config[CURLOPT_POSTFIELDS] = $fields;
            $_config[CURLOPT_POST] = true;
        }
	    if ($method == 'delete') {
		    $fields = json_encode($fields);
		    $_config[CURLOPT_POSTFIELDS] = $fields;
		    $_config[CURLOPT_CUSTOMREQUEST] = "DELETE";
	    }

        foreach ($config as $key => $value) {
            $_config[$key] = $value;
        }
        $curl = curl_init();
        curl_setopt_array($curl, $_config);

        $response = curl_exec($curl);
        curl_close($curl);

        //TODO check header
        return json_decode($response,true);
    }
}

//$method = "POST"; // TEMP

if ($router && $method) {
    if (file_exists('routers/' . $router . '.php')) {
        include_once 'routers/' . $router . '.php';
        $class = new $router($dataRequest,$urls);

        if (method_exists($class, $method)) {
            if ($return = $class->$method()) {
                header('Content-Type: application/json; charset=UTF-8');
                if($_GET["TEST"]=="Y"){
                    $return["request"] = $dataRequest;
                    echo "<pre>";print_r($return);echo "</pre>";
                    die;
                }
                $return["request"] = $dataRequest;
                echo json_encode($return);
                //http_response_code(200);
                die;
            } else {
                header('HTTP/1.0 400 Bad Request');
                echo json_encode(array(
                    'error' => 'Request completed with an error',
                    'dataRequest'=>$dataRequest
                ));
                //http_response_code(400);
                die;
            }
        } else {
            header('HTTP/1.0 400 Bad Request');
            echo json_encode(array(
                'error' => 'Method Not Found'
            ));
            //http_response_code(400);
            die;
        };
    } else {
        header('HTTP/1.0 400 Bad Request');
        echo json_encode(array(
            'error' => 'File Not Found'
        ));
        //http_response_code(400);
        die;
    }
} else {
    header('HTTP/1.0 400 Bad Request');
    echo json_encode(array(
        'error' => 'Class Not Found'
    ));
    //http_response_code(400);
    die;
}
