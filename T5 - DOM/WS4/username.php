<?php

    if(isset($_REQUEST['str'])){
        $jason['response'] = [$_REQUEST['str'] . "1", $_REQUEST['str'] . "2", $_REQUEST['str'] . "3", $_REQUEST['str'] . "4"];
        echo json_encode($jason);
    }

?>