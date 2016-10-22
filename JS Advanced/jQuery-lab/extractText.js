/**
 * Created by GTX on 22.10.2016 г..
 */

    $(document).ready(function () {
        $("#showItems").click(extractText);
    });

            function extractText() {
                let itemsJoined = $('#items li').toArray()
                        .map(li => li.textContent).join(', ');
                $("#result").text(itemsJoined);
            }


