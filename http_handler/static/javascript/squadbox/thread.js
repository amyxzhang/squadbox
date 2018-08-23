$(document).ready(function() {

    var submit_btn = $('#btn-submit'),
        from_field = $('#post-from'),
        subject_field = $('#post-subject'),
        post_text = $('#post-text'),
        post = $.trim($('#post-text').text()),
        whitelist_check = $('#whitelist-check')[0],
        obfuscate = $('#obfuscate'),
        obfuscate_name = $('#obfuscate-name'),
        obfuscate_subject = $('#obfuscate-subject'),
        obfuscate_post = $('#obfuscate-post'),
        obfuscate_check = false,
        clear = $('#clear'),
        blacklist_check = $('#blacklist-check')[0],
        user_email = $.trim($('#user_email').text()),
        sender_email = $.trim($('#sender-email').text()),
        group_name = $.trim($('#group-name').text()),
        post_id = $.trim($('#post-id').text()),
        post_subject = $.trim($('#post-subject').text()),
        approve_reject = $('input[type=radio][name=approve-reject]'),
        approveDiv = $('#ifApprove')[0],
        rejectDiv = $('#ifReject')[0];
        name_counter = 0;
        subject_counter = 0;

    $('[data-toggle="tooltip"]').tooltip();

    var post_selections = [];
    var subject_selections = [];
    var sender_selections = [];

    function makeObfuscate(selections) {
        if (obfuscate_check) {
            var selected = getSelection();
            var range = selected.getRangeAt(0);
            if (selected.toString().length >= 1) {
                selections.push(range)
                var x = document.createTextNode(' \u00d7')
            
                var strike_node = document.createElement("span");
                var container_node = document.createElement("span");
                var x_node = document.createElement("span");
                strike_node.setAttribute("class", "strike");
                container_node.setAttribute("class", "strikebox");
                range.surroundContents(strike_node);
                range.surroundContents(container_node);
                x_node.appendChild(x);
                x_node.style.cursor = "pointer";
                container_node.appendChild(x_node);
                
                x_node.onclick = function() {
                    unstrike = strike_node.innerHTML
                    unstrike_node = document.createTextNode(unstrike)
                    container_node.parentNode.replaceChild(unstrike_node, container_node)
                    index = selections.findIndex(range)
                    selections.splice(index, 1)
                };
            }

            $(".strike").css({
                "text-decoration": "line-through",
                "color": "grey"
            });
            $(".strikebox").css({
                "background-color": "#D3F8FF",
                "color": "#0091AC",
                "padding": "0 3px",
                "border-radius": "4px",
                "margin": "2px"
            });

            $(".strikebox").hover(function() {
                $(this).css("background-color", "#ABE7FF");
            }, function() {
                $(this).css("background-color", "#D3F8FF");
            });

    }};

    post_text.mouseup(function(){makeObfuscate(post_selections)});
    subject_field.mouseup(function(){makeObfuscate(subject_selections)});
    from_field.mouseup(function(){makeObfuscate(sender_selections)});

    obfuscate.click(function() {
        obfuscate_check = (obfuscate_check == false ? true : false);
        if (obfuscate_check) {
            clear[0].style.display = 'inline'
            obfuscate.css("background-color", "#FFFF90")
        }
        else {
            clear[0].style.display = 'none'
            obfuscate.css("background-color", "#357ebd")
        }
    });

    obfuscate.hover(function() {
        $(this).css("cursor", "pointer");
        $(this).css("color", "black")
        $(this).css("background-color", "#FFFF90")
        $(this).css("border","none")
    }, function() {
        if (!obfuscate_check){
        $(this).css("color", "white");
        $(this).css("background-color", "#357ebd")}
    })



    clear.click(function(){
        $('.strikebox').contents().unwrap();
        $('.strike').contents().unwrap();
        post_text.find('span').remove();
        subject_field.find('span').remove();
        from_field.find('span').remove();

        post_selections, subject_selections, sender_selections = []
    });

    approve_reject.change(function() {
        if (this.value == 'approve') {
            approveDiv.style.display = 'inline';
            rejectDiv.style.display = 'none';
        } else if (this.value == 'reject') {
            approveDiv.style.display = 'none';
            rejectDiv.style.display = 'inline';
        }
    });

    submit_btn.click(function() {
        status_params = {
            'group_name': group_name,
            'post_id': post_id,
        };
        var a_r_val = $('input[type=radio][name=approve-reject]:checked').val();
        var post_to_url = a_r_val == 'approve' ? '/approve_post' : '/reject_post';
        var list_url = null;
        var obfuscate_name_url = null;
        var obfuscate_subject_url = null;

        if (sender_selections) obfuscate_name_url = '/obfuscate_email';
        if (subject_selections) obfuscate_subject_url = '/obfuscate_subject';
        if (whitelist_check && whitelist_check.checked) list_url = '/whitelist';
        else if (blacklist_check && blacklist_check.checked) list_url = '/blacklist';
        if (a_r_val == 'reject') {
            status_params.explanation = $('#explanation').val();
            var tags = [];
            var checked = $('.tag-checks:checkbox:checked');
            checked.each(function() {
                tags.push(this.value);
            });
            if (tags.length > 0) status_params.tags = tags.join(',');
            else status_params.tags = '';
        }
        if (obfuscate_name_url != null) {
            var obs_params = {
                    'post_id': post_id,
                    'obfuscations': sender_selections
                };
                $.post(obfuscate_name_url, obs_params, function(obs_res) {
                    console.log('obfuscating')
                    notify(obs_res, true)
                })
            }

        if (obfuscate_subject_url != null) {
            var obs_params = {
                    'post_id': post_id,
                    'obfuscations': subject_selections
                };
                $.post(obfuscate_subject_url, obs_params, function(obs_res) {
                    console.log('obfuscating')
                    notify(obs_res, true)
                })
            }

        if (a_r_val) {
            $.post(post_to_url, status_params, function(status_res) {

                if (status_res.status && (list_url != null)) {
                    var list_params = {
                        'group_name': group_name,
                        'senders': sender_email
                    };
                    if (list_url != null){
                        $.post(list_url, list_params, function(list_res) {
                            console.log('post yes')
                            notify(list_res, true);
                        })};
                    

                } else notify(status_res, true);

                console.log(status_res);
     
                if (status_res.status) setTimeout(function() {
                    if ($('.reply').length > 0) {
                        location.reload(true);
                    } else {
                        window.location = '/mod_queue/' + group_name;
                    }
                }, 1000);
            })};
    });
});