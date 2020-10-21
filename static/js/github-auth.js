var query = {};
var callback = "";

addEventListener("load", function() {
    if (location.search.length > 1) {
        location.search.substr(1).split("&").forEach(function(kvp) {
            var parts = kvp.split("=", 2);
            if (parts.length === 2) {
                query[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
            }
        });
    }
    var oldState = localStorage.githubState;
    if (oldState) {
        localStorage.removeItem("githubState");
    }
    if (query.code && query.state) {
        if (query.state === oldState) {
            callback = location.pathname.substr("/static/github-auth/".length);
            document.getElementById("target").innerText = callback;
            document.getElementById("state-confirm").style.display = "block";
        } else {
            document.getElementById("state-error").style.display = "block";
        }
    } else {
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var state = "";
        for (var i = 0; i < 16; ++i) {
            state += alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        localStorage.githubState = state;
        var props = {
            "client_id": "6a1a713dd92598462dec",
            "redirect_uri": "https://ffaero.com" + location.pathname,
            "state": state
        };
        if (query.login) {
            props.login = query.login;
        }
        if (query.scope) {
            props.scope = query.scope;
        } else {
            props.scope = "user";
        }
        if (query.allow_signup) {
            props.allow_signup = query.allow_signup;
        }
        var uri = "https://github.com/login/oauth/authorize?" + Object.getOwnPropertyNames(props).map(function(key) {
            return encodeURIComponent(key) + "=" + encodeURIComponent(props[key]);
        }).join("&");
        document.getElementById("redir").href = uri;
        document.getElementById("state-redir").style.display = "block";
        location.href = uri;
    }
});

function cancelAuth() {
    document.getElementById("state-confirm").style.display = "none";
    document.getElementById("state-cancel").style.display = "block";
}

function finishAuth() {
    document.getElementById("state-confirm").style.display = "none";
    document.getElementById("state-done").style.display = "block";
    var iframe = document.createElement("iframe");
    iframe.src = "http://" + callback + "?code=" + query.code;
    iframe.style.display = "none";
    document.body.appendChild(iframe);
}
