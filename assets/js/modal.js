$(document).ready(function() {
            $(".modal").modal();
            $("#modal1").modal("open");
            $("#cls").click(function() {
                $("#modal1").modal("close");
            });
        });