 $(function() {
        $("#imgWrap").change(function(e) {
            var imgBox = e.target;
            uploadImg($('#showImg'), imgBox)
        });

        function uploadImg(element, tag) {
            var file = tag.files[0];
            var imgSrc;
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function() {
                console.log(this.result);
                imgSrc = this.result;
                var imgs = document.createElement("img");
                $(imgs).attr("src", imgSrc);
                element.append(imgs);
            };
        }
    })