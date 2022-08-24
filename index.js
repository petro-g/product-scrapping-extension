const serverAddress = "https://zouto.store"
var productDetail;
var product_title = '';
var product_price = '';
var productprice = '';
var product_price1 = '';
var product_image = '';
var product_weight = '';
var product_weight_1 = '';
var product_daimention = '';
var domainName = '';
var product_url = '';
var browser_id = '';
document.addEventListener('DOMContentLoaded', function() {
    // alert(product_url);
    // On clicking the set alert button, we make a call to our server
    // Sever indexes the product and set a trigger to send mail when condition is met
    $('#submit_add').on('click', function() {
        // console.log(product_price);
        var id = localStorage.getItem("uniqueID");
        var comment = $("#comment_box").val();
        var productQty = $('#product_qty').val();
        if ($('#product_qty').val() == 0) {
            var productQty = '1';
        }

        if (domainName == 'darty.com') {
            product_price = product_price.replace(/\s+/g, '')
        }

        var parameters = {
            'product_title': product_title,
            'product_price': product_price,
            'product_price1': product_price1,
            'product_image': product_image,
            'product_weight': product_weight,
            'product_weight_1': product_weight_1,
            'product_daimention': product_daimention,
            'domain_name': domainName,
            'id_browser': id,
            'product_url': product_url,
            'comment': comment,
            'product_quantity': productQty
        }
        console.log(parameters);
        $.ajax({
            type: 'POST',
            url: 'https://zouto.store/add_to_wishlist.php',
            data: parameters,
            success: function(res) {
                var obj = JSON.parse(res);
                // console.log(obj)
                if (obj.success != '') {
                    $(".message").html(obj.success)
                    $(".message").css({ 'background-color': 'green', 'color': '#fff', 'padding': '10px' })
                } else if (obj.error != '') {
                    if (obj.error == 'Prix ​​du produit non communiqué') {
                        $('#modalID').show();
                    }
                    $(".message").html(obj.error)
                    $(".message").css({ 'background-color': 'red', 'color': '#fff', 'padding': '10px' })
                }
                $(".clear_list").toggle('slow');
                $(".smdCurrentProcuts").toggle('slow');
                $(".smdTopTrending").toggle('slow');
                setTimeout(function() {
                    $(".message").html('')
                    $(".message").removeAttr('style')
                }, 2000);
                $(".added_data").html(obj.html_data)
                    //$(".clear_list").css('display','block')
            },
            error: function() {
                alert("error");
            }
        });
    });

    $("#submit_zouto").on('click', function(e) {
        e.preventDefault();
        var product_url = $('#product_url').val();
        var product_title = $('#product_title').val();
        var product_price = $('#product_price').val();
        var product_weight = $('#product_weight').val();
        var product_depth = $('#product_depth').val();
        var product_height = $('#product_height').val();
        var product_width = $('#product_width').val();

        if (product_url == "" || product_url == "undefined" || product_url.length == 0) {
            $("#urlError").html("Please enter Product URL");
            $("#urlError").addClass("error");
            return false;
        }

        if (product_title == "" || product_title == "undefined" || product_title.length == 0) {
            $("#nameError").html("Please enter Product Name");
            $("#nameError").addClass("error");
            return false;
        }
        if (product_price == "" || product_price == "undefined" || product_price.length == 0) {
            $("#priceError").html("Please enter Product Price");
            $("#priceError").addClass("error");
            return false;
        }
        if (product_weight == "" || product_weight == "undefined" || product_weight.length == 0) {
            $("#weightError").html("Please enter Product Price");
            $("#weightError").addClass("error");
            return false;
        }

        if (product_depth == "" || product_depth == "undefined" || product_depth.length == 0) {
            $("#depthError").html("Please enter Product depth");
            $("#depthError").addClass("error");
            return false;
        }

        if (product_height == "" || product_height == "undefined" || product_height.length == 0) {
            $("#heightError").html("Please enter Product height");
            $("#heightError").addClass("error");
            return false;
        }

        if (product_width == "" || product_width == "undefined" || product_width.length == 0) {
            $("#widthError").html("Please enter Product width");
            $("#widthError").addClass("error");
            return false;
        }

        if (product_title != "" && product_price != "" && product_weight != "") {
            // console.log('THERE')
            $('#modalID').hide();
            $("#nameError").html("");
            $("#nameError").removeClass("error");

            $("#priceError").html("");
            $("#priceError").removeClass("error");

            $("#weightError").html("");
            $("#weightError").removeClass("error");

            var productQty = $('#product_qty').val();
            if ($('#product_qty').val() == 0) {
                var productQty = '1';
            }
            if (domainName == 'darty.com') {
                product_price = product_price.replace(/\s+/g, '')
            }
            var id = localStorage.getItem("uniqueID");
            var comment = $("#pro_comment").val();
            var parameters = {
                'product_title': product_title,
                'product_price': product_price,
                'product_price1': '',
                'product_image': product_image,
                'product_weight': product_weight,
                'product_weight_1': '',
                'domain_name': domainName,
                'id_browser': id,
                'product_url': product_url,
                'product_comment': comment,
                'product_quantity': productQty,
                'product_depth': product_depth,
                'product_height': product_height,
                'product_width': product_width
            }
            $.ajax({
                type: 'POST',
                url: 'https://zouto.store/add_to_wishlist.php',
                data: parameters,
                success: function(res) {
                    var obj = JSON.parse(res);
                    if (obj.success != '') {
                        $(".message_modal").html(obj.success)
                        $(".message_modal").css({ 'background-color': 'green', 'color': '#fff', 'padding': '10px' })
                    } else if (obj.error != '') {
                        $(".message_modal").html(obj.error)
                        $(".message_modal").css({ 'background-color': 'red', 'color': '#fff', 'padding': '10px' })
                    }
                    $(".clear_list").toggle('slow');
                    $(".smdCurrentProcuts").toggle('slow');
                    $(".smdTopTrending").toggle('slow');
                    setTimeout(function() {
                        $('#myModal').modal('toggle');
                        $(".message_modal").html('')
                        $(".message_modal").removeAttr('style')
                    }, 2000);
                    $(".added_data").html(obj.html_data)
                        //$(".clear_list").css('display','block')
                },
                error: function() {
                    alert("error");
                }
            });
        }
    });

    $("#submit_signup").on('click', function() {
        var id_browser = localStorage.getItem("uniqueID");
        var customer_email = $("#email").val();
        if (customer_email != '') {
            $.ajax({
                type: 'POST',
                url: 'https://zouto.store/save_browser_id.php',
                data: 'id_browser=' + id_browser + '&customer_email=' + customer_email,
                success: function(res) {
                    $(".signup").css('display', 'none');
                    $(".add_to_wishlist").css('display', 'block');
                    getProductInfo();
                    return false;
                }
            });
        } else {
            $('.message_signup').html('Please Enter Customer Email.')
            $(".message_signup").css({ 'background-color': 'red', 'color': '#fff', 'padding': '10px' })
        }
    })

    $(".removeSelectedData").on('click', function() {
        var allIDs = []
        $('input.remove_selection:checkbox:checked').each(function() {
            allIDs.push($(this).val())
        });
        var combined_data = allIDs.join(',')
        if (combined_data != '') {
            $.ajax({
                type: 'POST',
                url: 'https://zouto.store/clear_wishlist.php',
                data: 'type=selected&ids=' + combined_data,
                success: function(res) {
                    var obj = JSON.parse(res);
                    $(".added_data").html(obj.html_data)
                    if (obj.clear_all_data == '1') {
                        $(".clear_list").css('display', 'none')
                    }
                    //$('.show_wish').hide();
                    return false;
                }
            });
        } else {
            $(".remove_product").html('choose atleast one product')
            $(".remove_product").css({ 'background-color': 'red', 'color': '#fff', 'padding': '10px' })
            setTimeout(function() {
                $(".remove_product").html('')
                $(".remove_product").removeAttr('style')
            }, 2000);
        }
    })

    $(".removeData").on('click', function() {
        var allIDs = []
        $(".single_record").each(function() {
            allIDs.push($(this).attr('data-id'))
        })
        var combined_data = allIDs.join(',')
        $.ajax({
            type: 'POST',
            url: 'https://zouto.store/clear_wishlist.php',
            data: 'type=all&ids=' + combined_data,
            success: function(res) {
                var obj = JSON.parse(res);
                $(".added_data").html(obj.html_data)
                $(".clear_list").css('display', 'none');
                //$('.show_wish').hide();
                return false;
            }
        });
    })

    $('a#automatically').click(function() {
        $('.smdCurrentProcuts').css('display', 'block');
        $(".smdTopTrending").css('display', 'none');
    });

    var site_array = ["conforama.fr", "allobebe.fr", "laredoute.fr", "leroymerlin.fr", "kiabi.com", "tikamoon.com", "manomano.fr", "zalando.fr", "vente-unique.com", "darty.com", "ubaldi.com", "cdiscount.com", "amazon.fr", "veepee.fr"];

    function checkValue(value, arr) {
        var status = 'Not exist';
        for (var i = 0; i < arr.length; i++) {
            var name = arr[i];
            if (name == value) {
                status = 'Exist';
                break;
            }
        }
        return status;
    }

    $(document).ready(function() {
        $('.smdCurrentProcuts').css('display', 'none');
        getCurrentTabUrl(function(url) {
            product_url = url;
            domainName = url.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)[0];
            var domainExit = checkValue(domainName, site_array);
            if (domainExit == 'Exist') {
                var date = new Date();
                var components = [
                    date.getYear(),
                    date.getMonth(),
                    date.getDate(),
                    date.getHours(),
                    date.getMinutes(),
                    date.getSeconds(),
                    date.getMilliseconds()
                ];
                if (localStorage.getItem("uniqueID") != null) {
                    var id = localStorage.getItem("uniqueID");
                    $.ajax({
                        type: 'POST',
                        url: 'https://zouto.store/check_browser_linked.php',
                        data: 'browser_id=' + id,
                        success: function(res) {
                            var obj = JSON.parse(res);
                            if (obj.status == '1') {
                                $(".signup").css('display', 'none');
                                $(".homepage").css('display', 'none');
                                $(".add_to_wishlist").css('display', 'block');
                                getProductInfo();
                            }
                            return false;
                        }
                    });
                } else {
                    var id = components.join("");
                    localStorage.setItem("uniqueID", id);
                }
            } else {
                $('#modalIDD').show();
                $(".main_container.signup").css('display', 'none');
                $(".othersites").css('display', 'block');
                return false;
            }
        });
    });
});

//});

function getProductInfo() {
    $(".loader").css('display', 'block');
    $(".main_container").addClass('processing');
    getCurrentTabUrl(function(url) {
        product_url = url;
        domainName = url.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)[0];
        if (domainName == 'laredoute.fr') {
            chrome.runtime.onMessage.addListener(function(request, sender) {
                if (request.action == "getSource") {
                    this.pageSource = request.source;
                    var htmlsource = this.pageSource;
                    var temp = document.createElement('div');
                    // temp.setAttribute("id", "scrappeddata");
                    temp.innerHTML = htmlsource;
                    product_title = temp.getElementsByClassName('pdp-title')[0].innerText;
                    if (product_title != '') {
                        product_price = temp.getElementsByClassName('price')[0].innerText;
                        if (temp.querySelectorAll('.mainMedia_imageContainer > picture > img') != undefined) {
                            product_image = '<img src="' +temp.querySelectorAll('.mainMedia_imageContainer > picture > img')[0].getAttribute('src')+ '"/>';
                        } else {
                            product_image = '<img src="' +temp.querySelectorAll('.mainMedia_imageContainer > img')[0].getAttribute('src')+ '"/>';
                        }
                        product_weight = ''; //temp.getElementsByClassName('pdp-description')[0].innerHTML;
                        var dimen = temp.getElementsByClassName('CDMProductDataSheet');
                        if (dimen != undefined && dimen.length > 0) {
                            // console.log(dimen);
                            var table = dimen[0].querySelectorAll('tbody tr td');
                            if (table.length > 0) {
                                table.forEach(function(cel, i) {
                                    if (cel.innerText == 'Poids du produit') {
                                        product_weight = table[i + 1].innerText
                                    }
                                });
                            }
                        }else if (temp.querySelectorAll('colis').length > 0) {
                            var productdaimention = temp.querySelectorAll('colis')[0].innerHTML;
                            var newweight = productdaimention.split("<br>");
                            var depth = 0;
                            var width = 0;
                            var height = 0;
                            console.log(newweight);
                            newweight.forEach(function(element,i){
                                if(element.includes('x')){
                                    var d = element.split('-');
                                    var l = element.split('.');
                                    if(l.length > 1){
                                        var newd = l[0].split('x');
                                        depth = newd[0];
                                        height = newd[1];
                                        width = newd[2];
                                        product_weight = l[1];
                                    }else if(d.length == 1){
                                        var newd = d[0].split('x');
                                        depth = newd[0];
                                        height = newd[1];
                                        width = newd[2];
                                        product_weight = newweight[i+1];
                                    }else{
                                        var newd = d[0].split('x');
                                        depth = newd[0];
                                        height = newd[1];
                                        width = newd[2];
                                        product_weight = d[1];
                                    }
                                }
                            });
                            product_daimention = width + ' ' + depth + ' ' + ' ' + height + '';
                        } else if (temp.querySelectorAll('dscpdp').length > 0) {
                            var productdaimention = temp.querySelectorAll('dscpdp')[0].innerHTML;
                            var newweight = productdaimention.split("<br>");
                            var depth = 0;
                            var width = 0;
                            var height = 0;
                            newweight.forEach(function(cell,key) {
                                // console.log(cell);
                                if(cell.includes("Dimensions")){
                                    // var d = ((newweight[key+1]).innerText).split('x');
                                    var d = newweight[key+1].split('x');
                                    depth = d[0];
                                    height = d[1]
                                    width = d[2]
                                    product_weight = newweight[key+2]
                                }else{
                                    if (cell.includes("Longueur") || cell.includes("Largeur")) {
                                        // console.log(cell);
                                        depth = cell.split(":")[1];
                                        if(depth == undefined){
                                            depth = cell;
                                        }
                                    }
                                    if (cell.includes("Hauteur")) {
                                        console.log(cell);
                                        height = cell.split(":")[1] == undefined ? '0' : cell.split(":")[1];
                                        if(height == 0){
                                            height = cell;
                                        }
                                    }
                                    if (cell.includes("Profondeur") || cell.includes("Largeur")) {
                                        width = cell.split(":")[1];
                                        if(width == undefined){
                                            width = cell;
                                        }
                                    }
                                }
                            });
                            product_daimention = width + ' ' + depth + ' ' + ' ' + height + '';
                        } else if (temp.querySelectorAll('.pdp-description-attr') != undefined) {
                            product_daimention = temp.querySelectorAll('.pdp-description-attr')[0].innerText;
                        } else {
                            var dimen = temp.getElementsByClassName('pdp-description-attr-value')[1].innerText;
                            product_daimention = dimen;
                        }
                        var id = localStorage.getItem("uniqueID");
                        var parameters = {
                            'product_title': product_title,
                            'product_price': product_price,
                            'product_image':  product_image,
                            'product_weight': product_weight,
                            'product_weight_1': '',
                            'product_url': product_url,
                            'product_daimention': product_daimention,
                            'domain_name': domainName,
                            'browser_id': id
                        }
                        sendAjax(parameters);
                    } else {
                        $(".homepage").css('display', 'block');
                        $(".signup").css('display', 'none');
                        $(".add_to_wishlist").css('display', 'none');
                        $(".loader").css('display', 'none');
                        $(".main_container").removeClass('processing');
                    }
                }
            });

            chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
                chrome.tabs.executeScript(
                    tabs[0].id, { code: 'var s = document.documentElement.outerHTML; chrome.runtime.sendMessage({action: "getSource", source: s});' }
                );
            });
        } else {
            $.get(url, function(data) {
                // console.log(data);
                var temp = document.createElement('div');
                // temp.setAttribute("id", "scrappeddata");
                temp.innerHTML = data;
                if (domainName == 'leroymerlin.fr') {
                    if (temp.getElementsByClassName('l-product-detail-presentation__title').length > 0 || temp.getElementsByClassName('a-titleProduct').length > 0) {
                        if (temp.getElementsByClassName('l-product-detail-presentation__title').length > 0) {
                            product_title = temp.getElementsByClassName('l-product-detail-presentation__title')[0].innerHTML;
                        } else if (temp.getElementsByClassName('a-titleProduct').length > 0) {
                            var htmlTitle = temp.getElementsByClassName('a-titleProduct');
                            product_title = $(htmlTitle).text();
                        }
                        if (temp.getElementsByClassName('km-main-price').length > 0) {
                            product_price = temp.getElementsByClassName('km-main-price')[0].innerHTML;
                        } else if (temp.getElementsByClassName('l-mainPrice').length > 0) {
                            var htmlPrice = temp.getElementsByClassName('l-mainPrice');
                            product_price1 = $(htmlPrice).text();
                        }
                        if (temp.getElementsByClassName('m-carousel-main__picture').length > 0) {
                            product_image = temp.getElementsByClassName('m-carousel-main__picture')[0].innerHTML;
                        } else if (temp.getElementsByClassName('js-productPage').length > 0) {
                            product_image = temp.getElementsByClassName('js-productPage')[0].innerHTML;
                        }
                        if (temp.getElementsByClassName('l-contentProductPage').length > 0) {
                            product_weight = temp.getElementsByClassName('l-contentProductPage')[0].innerHTML;
                        }
                        product_weight_1 = '';

                        var id = localStorage.getItem("uniqueID");
                        var parameters = {
                            'product_title': product_title,
                            'product_price': product_price,
                            'product_price1': product_price1,
                            'product_image': product_image,
                            'product_weight': product_weight,
                            'product_weight_1': product_weight_1,
                            'domain_name': domainName,
                            'browser_id': id
                        }
                        sendAjax(parameters);
                    } else {
                        $(".homepage").css('display', 'block');
                        $(".signup").css('display', 'none');
                        $(".add_to_wishlist").css('display', 'none');
                        $(".loader").css('display', 'none');
                        $(".main_container").removeClass('processing');
                    }
                } else if (domainName == 'kiabi.com') {
                    if (temp.getElementsByClassName('product-identity').length > 0) {
                        product_title = temp.getElementsByClassName('product-identity')[0].innerHTML;
                        product_price = temp.getElementsByClassName('lowestPrice')[0].innerHTML;
                        product_image = temp.getElementsByClassName('whiteframe promoStickerTarget')[0].innerHTML;
                        product_weight = '';
                        product_weight_1 = '';

                        var id = localStorage.getItem("uniqueID");
                        var parameters = {
                            'product_title': product_title,
                            'product_price': product_price,
                            'product_image': product_image,
                            'product_weight': product_weight,
                            'product_weight_1': product_weight_1,
                            'domain_name': domainName,
                            'browser_id': id
                        }
                        sendAjax(parameters);
                    } else {
                        $(".homepage").css('display', 'block');
                        $(".signup").css('display', 'none');
                        $(".add_to_wishlist").css('display', 'none');
                        $(".loader").css('display', 'none');
                        $(".main_container").removeClass('processing');
                    }
                } else if (domainName == 'conforama.fr') {
                    var htmlTitle = temp.getElementsByClassName('name')[0].innerHTML;
                    product_title = $(htmlTitle).text();
                    if (product_title != '') {
                        var htmlPrice = temp.getElementsByClassName('currentPrice')[0].innerHTML;
                        product_price = $(htmlPrice).text();

                        var htmlImage = temp.getElementsByClassName('productPics')[0].innerHTML;
                        product_image1 = $(htmlImage).attr('href');
                        product_image = 'https:' + product_image1;

                        var id = localStorage.getItem("uniqueID");
                        var parameters = {
                            'product_title': product_title,
                            'product_price': product_price,
                            'product_image': product_image,
                            'product_weight': '',
                            'product_weight_1': '',
                            'domain_name': domainName,
                            'browser_id': id
                        }
                        sendAjax(parameters);
                    } else {
                        $(".homepage").css('display', 'block');
                        $(".signup").css('display', 'none');
                        $(".add_to_wishlist").css('display', 'none');
                        $(".loader").css('display', 'none');
                        $(".main_container").removeClass('processing');
                    }
                } else if (domainName == 'allobebe.fr') {
                    if (temp.getElementsByClassName('m0 tal').length > 0) {
                        var htmlTitle = temp.getElementsByClassName('m0 tal')[0].innerHTML;
                        product_title = $(htmlTitle).text();
                        var htmlPrice = temp.getElementsByClassName('itemPrice ff2 blackPrice');
                        product_price = $(htmlPrice).text();
                        product_image = temp.getElementsByClassName('productViewWrapper')[0].innerHTML;
                        product_weight = temp.getElementsByClassName('productDesc productBlock')[0].innerHTML;
                        var id = localStorage.getItem("uniqueID");
                        var parameters = {
                            'product_title': product_title,
                            'product_price': product_price,
                            'product_image': product_image,
                            'product_weight': product_weight,
                            'product_weight_1': '',
                            'domain_name': domainName,
                            'browser_id': id
                        }
                        sendAjax(parameters);
                    } else {
                        $(".homepage").css('display', 'block');
                        $(".signup").css('display', 'none');
                        $(".add_to_wishlist").css('display', 'none');
                        $(".loader").css('display', 'none');
                        $(".main_container").removeClass('processing');
                    }
                }
                // else if(domainName == 'laredoute.fr') {
                // }
                else if (domainName == 'tikamoon.com') {
                    if (temp.getElementsByClassName('infos').length > 0) {
                        product_title = temp.getElementsByClassName('infos')[0].innerHTML;
                        product_price = temp.getElementsByClassName('price')[0].innerHTML;
                        product_image = temp.getElementsByClassName('diapo')[0].innerHTML;
                        product_weight = temp.getElementsByClassName('infos-teck')[0].innerHTML;
                        var id = localStorage.getItem("uniqueID");
                        var parameters = {
                            'product_title': product_title,
                            'product_price': product_price,
                            'product_image': product_image,
                            'product_weight': product_weight,
                            'product_weight_1': '',
                            'domain_name': domainName,
                            'browser_id': id
                        }
                        sendAjax(parameters);
                    } else {
                        $(".homepage").css('display', 'block');
                        $(".signup").css('display', 'none');
                        $(".add_to_wishlist").css('display', 'none');
                        $(".loader").css('display', 'none');
                        $(".main_container").removeClass('processing');
                    }
                } else if (domainName == 'manomano.fr') {
                    var htmlTitle = temp.getElementsByClassName('index_default_text__36AuK');
                    product_title = $(htmlTitle).text();
                    if (product_title != '') {
                        var htmlPrice = temp.getElementsByClassName('price_priceContainer__1HWhT');
                        product_price = $(htmlPrice).text();
                        product_image = temp.getElementsByClassName('slider_item__1-mdC')[0].innerHTML;
                        product_weight = temp.getElementsByClassName('description_container__2X9Tm')[0].innerHTML;
                        var id = localStorage.getItem("uniqueID");
                        var parameters = {
                            'product_title': product_title,
                            'product_price': product_price,
                            'product_image': product_image,
                            'product_weight': product_weight,
                            'product_weight_1': '',
                            'domain_name': domainName,
                            'browser_id': id
                        }
                        sendAjax(parameters);
                    } else {
                        $(".homepage").css('display', 'block');
                        $(".signup").css('display', 'none');
                        $(".add_to_wishlist").css('display', 'none');
                        $(".loader").css('display', 'none');
                        $(".main_container").removeClass('processing');
                    }
                } else if (domainName == 'zalando.fr') {
                    var htmlTitle = temp.getElementsByClassName('OEhtt9 ka2E9k uMhVZi z-oVg8 pVrzNP w5w9i_ _1PY7tW _9YcI4f');
                    product_title = $(htmlTitle).text();
                    if (product_title != '') {
                        if (temp.getElementsByClassName('uqkIZw ka2E9k uMhVZi FxZV-M z-oVg8 pVrzNP').length > 0) {
                            var htmlPrice = temp.getElementsByClassName('uqkIZw ka2E9k uMhVZi FxZV-M z-oVg8 pVrzNP');
                            product_price = $(htmlPrice).text();
                        } else {
                            var htmlPrice = temp.getElementsByClassName('uqkIZw ka2E9k uMhVZi dgII7d z-oVg8 _88STHx cMfkVL');
                            product_price = $(htmlPrice).text();
                        }
                        product_image = temp.getElementsByClassName('XLgdq7 _0xLoFW JgpeIw r9BRio be4rWJ N2nrLi _4oK5GO heWLCX _MmCDa')[0].innerHTML;
                        var id = localStorage.getItem("uniqueID");
                        var parameters = {
                            'product_title': product_title,
                            'product_price': product_price,
                            'product_image': product_image,
                            'product_weight': '',
                            'product_weight_1': '',
                            'domain_name': domainName,
                            'browser_id': id
                        }
                        sendAjax(parameters);
                    } else {
                        $(".homepage").css('display', 'block');
                        $(".signup").css('display', 'none');
                        $(".add_to_wishlist").css('display', 'none');
                        $(".loader").css('display', 'none');
                        $(".main_container").removeClass('processing');
                    }
                } else if (domainName == 'vente-unique.com') {
                    var htmlTitle = temp.getElementsByClassName('grey product');
                    product_title = $(htmlTitle).text();
                    if (product_title != '') {
                        var htmlPrice = temp.getElementsByClassName('shadow-white t-nowrap');
                        product_price = $(htmlPrice).attr('data-price');
                        product_image = temp.getElementsByClassName('box-content-wrapper')[0].innerHTML;
                        var id = localStorage.getItem("uniqueID");
                        var parameters = {
                            'product_title': product_title,
                            'product_price': product_price,
                            'product_image': product_image,
                            'product_weight': '',
                            'product_weight_1': '',
                            'domain_name': domainName,
                            'browser_id': id
                        }
                        sendAjax(parameters);
                    } else {
                        $(".homepage").css('display', 'block');
                        $(".signup").css('display', 'none');
                        $(".add_to_wishlist").css('display', 'none');
                        $(".loader").css('display', 'none');
                        $(".main_container").removeClass('processing');
                    }
                } else if (domainName == 'darty.com') {
                    var htmlTitle = temp.getElementsByClassName('product_name');
                    product_title = $(htmlTitle).text();
                    if (product_title != '') {
                        var htmlPrice = temp.getElementsByClassName('darty_prix darty_mediumbig');
                        product_price = $(htmlPrice).text();
                        product_image = temp.getElementsByClassName('darty_product_picture_main_pic')[0].innerHTML;
                        product_weight = temp.getElementsByClassName('product_bloc_caracteristics')[0].innerHTML;
                        var id = localStorage.getItem("uniqueID");
                        var parameters = {
                            'product_title': product_title,
                            'product_price': product_price.replace(/\s+/g, ''),
                            'product_image': product_image,
                            'product_weight': product_weight,
                            'product_weight_1': '',
                            'domain_name': domainName,
                            'browser_id': id
                        }
                        sendAjax(parameters);
                    } else {
                        $(".homepage").css('display', 'block');
                        $(".signup").css('display', 'none');
                        $(".add_to_wishlist").css('display', 'none');
                        $(".loader").css('display', 'none');
                        $(".main_container").removeClass('processing');
                    }
                } else if (domainName == 'ubaldi.com') {
                    var htmlTitle = temp.getElementsByClassName('fa-titre-article');
                    product_title = $(htmlTitle).text();
                    if (product_title != '') {
                        var htmlPrice = temp.getElementsByClassName('fa-prix uba-prix');
                        product_price = $(htmlPrice).text();
                        product_image = temp.getElementsByClassName('diapo-full-img-container')[0].innerHTML;
                        product_weight = temp.getElementsByClassName('carac-principales')[0].innerHTML;
                        var id = localStorage.getItem("uniqueID");
                        var parameters = {
                            'product_title': product_title,
                            'product_price': product_price,
                            'product_image': product_image,
                            'product_weight': product_weight,
                            'product_weight_1': '',
                            'domain_name': domainName,
                            'browser_id': id
                        }
                        sendAjax(parameters);
                    } else {
                        $(".homepage").css('display', 'block');
                        $(".signup").css('display', 'none');
                        $(".add_to_wishlist").css('display', 'none');
                        $(".loader").css('display', 'none');
                        $(".main_container").removeClass('processing');
                    }
                } else if (domainName == 'cdiscount.com') {
                    //producttitle = temp.getElementsByClassName('fpDesCol')[0].innerHTML;
                    product_title = temp.getElementsByTagName('h1')[0].innerHTML;
                    if (product_title != '') {
                        if (temp.querySelectorAll('span.fpPrice.price.priceColor.jsMainPrice.jsProductPrice.hideFromPro').length != 0) {
                            product_price = temp.querySelectorAll('span.fpPrice.price.priceColor.jsMainPrice.jsProductPrice.hideFromPro')[0].getAttribute('content');
                        }
                        product_image = temp.querySelectorAll('.jsPictureZone > a')[0].innerHTML;
                        var width = '';
                        var depth = '';
                        var height = '';
                        var weigth = '';
                        if (temp.getElementsByClassName('fpDescTb') != undefined) {
                            var table = temp.querySelectorAll('.fpDescTb tr');
                            table.forEach(function(cell) {
                                // console.log(cell.querySelectorAll('td:first-child').length);
                                if (cell.querySelectorAll('td:first-child')[0] != undefined && (cell.querySelectorAll('td:first-child')[0].innerText == 'Dimensions (LxPxH)')) {
                                    var dimall = cell.querySelectorAll('td:last-child')[0].innerText;
                                    var diexplo = dimall.split("x");
                                    width = diexplo[0];
                                    depth = diexplo[1];
                                    height = diexplo[2];
                                } else if (cell.querySelectorAll('td:first-child')[0] != undefined && (cell.querySelectorAll('td:first-child')[0].innerText == 'Dimensions (L x p x h)')) {
                                    var dimall = cell.querySelectorAll('td:last-child')[0].innerText;
                                    var diexplo = dimall.split("x");
                                    width = diexplo[0];
                                    depth = diexplo[1];
                                    height = diexplo[2];
                                } else if (cell.querySelectorAll('td:first-child')[0] != undefined && (cell.querySelectorAll('td:first-child')[0].innerText == 'Dimensions brutes - article emballé (L x l x H)')) {
                                    if ((cell.querySelectorAll('td:last-child')[0].innerHTML.split("<br>")).length > 2) {
                                        var dimall = cell.querySelectorAll('td:last-child')[0].innerHTML.split("<br>");
                                        var diexplo = (dimall[0].replace("Colis 1 :", "")).split("x");
                                    } else {
                                        var dimall = cell.querySelectorAll('td:last-child')[0].innerText;
                                        var diexplo = dimall.split("x");
                                    }
                                    width = diexplo[0];
                                    depth = diexplo[1];
                                    height = diexplo[2];
                                } else if (cell.querySelectorAll('td:first-child')[0] != undefined && (cell.querySelectorAll('td:first-child')[0].innerText == 'Dimensions du colis (l x p x h)')) {
                                    if ((cell.querySelectorAll('td:last-child')[0].innerHTML.split("<br>")).length > 2) {
                                        var dimall = cell.querySelectorAll('td:last-child')[0].innerHTML.split("<br>");
                                        var diexplo = (dimall[0].replace("Colis 1 :", "")).split("x");
                                    } else {
                                        var dimall = cell.querySelectorAll('td:last-child')[0].innerText;
                                        var diexplo = dimall.split("x");
                                    }
                                    width = diexplo[0];
                                    depth = diexplo[1];
                                    height = diexplo[2];
                                } else {
                                    if (cell.querySelectorAll('td:first-child').length > 0 && (cell.querySelectorAll('td:first-child')[0].innerText == 'Largeur (emballée)' || cell.querySelectorAll('td:first-child')[0].innerText == 'Longueur (emballée)')) {
                                        width = cell.querySelectorAll('td:last-child')[0].innerText;
                                    } else {
                                        if (cell.querySelectorAll('td:first-child')[0] != undefined && (cell.querySelectorAll('td:first-child')[0].innerText == 'Largeur' || cell.querySelectorAll('td:first-child')[0].innerText == 'Longueur')) {
                                            width = cell.querySelectorAll('td:last-child')[0].innerText;
                                        }
                                    }

                                    if (cell.querySelectorAll('td:first-child')[0] != undefined && (cell.querySelectorAll('td:first-child')[0].innerText == 'Profondeur (emballée)' || cell.querySelectorAll('td:first-child')[0].innerText == 'Largeur (profondeur)')) {
                                        depth = cell.querySelectorAll('td:last-child')[0].innerText;
                                    } else {
                                        if (cell.querySelectorAll('td:first-child')[0] != undefined && (cell.querySelectorAll('td:first-child')[0].innerText == 'Profondeur' || cell.querySelectorAll('td:first-child')[0].innerText == 'Largeur (profondeur)')) {
                                            depth = cell.querySelectorAll('td:last-child')[0].innerText;
                                        }
                                    }
                                    if (cell.querySelectorAll('td:first-child')[0] != undefined && cell.querySelectorAll('td:first-child')[0].innerText == 'Hauteur (Expédition)') {
                                        height = cell.querySelectorAll('td:last-child')[0].innerText;
                                    } else {
                                        if (cell.querySelectorAll('td:first-child')[0] != undefined && cell.querySelectorAll('td:first-child')[0].innerText == 'Hauteur') {
                                            height = cell.querySelectorAll('td:last-child')[0].innerText;
                                        }
                                    }
                                    if (cell.querySelectorAll('td:first-child')[0] != undefined && (cell.querySelectorAll('td:first-child')[0].innerText == 'Poids (Expédition)' || cell.querySelectorAll('td:first-child')[0].innerText == 'Poids (net)')) {
                                        weigth = cell.querySelectorAll('td:last-child')[0].innerText;
                                    } else {
                                        if (cell.querySelectorAll('td:first-child')[0] != undefined && (cell.querySelectorAll('td:first-child')[0].innerText == 'Poids' || cell.querySelectorAll('td:first-child')[0].innerText == 'Poids (net)')) {
                                            weigth = cell.querySelectorAll('td:last-child')[0].innerText;
                                        }
                                    }
                                }
                                if (cell.querySelectorAll('td:first-child')[0] != undefined && cell.querySelectorAll('td:first-child')[0].innerText == 'Poids emballé') {
                                    if ((cell.querySelectorAll('td:last-child')[0].innerHTML.split("<br>")).length > 2) {
                                        var dimall = cell.querySelectorAll('td:last-child')[0].innerHTML.split("<br>");
                                        weigth = dimall[0].replace("Colis 1 :", "");
                                    } else {
                                        weigth = cell.querySelectorAll('td:last-child')[0].innerText;
                                    }
                                }
                                if (cell.querySelectorAll('td:first-child')[0] != undefined && cell.querySelectorAll('td:first-child')[0].innerText == 'Poids colis') {
                                    if ((cell.querySelectorAll('td:last-child')[0].innerHTML.split("<br>")).length > 2) {
                                        var dimall = cell.querySelectorAll('td:last-child')[0].innerHTML.split("<br>");
                                        weigth = dimall[0].replace("Colis 1 :", "");
                                    } else {
                                        weigth = cell.querySelectorAll('td:last-child')[0].innerText;
                                    }
                                }

                            });

                            // var productweight = temp.querySelectorAll('.fpDescTb tr')[0].innerHTML;
                            product_weight = weigth; //parseFloat(productweight);
                            product_daimention = width + ' ' + depth + ' ' + ' ' + height + '';
                        }
                        var id = localStorage.getItem("uniqueID");
                        var parameters = {
                            'product_title': product_title,
                            'product_price': product_price,
                            'product_image': product_image,
                            'product_weight': product_weight,
                            'product_weight_1': '',
                            'domain_name': domainName,
                            'product_daimention': product_daimention,
                            'browser_id': id
                        }
                        sendAjax(parameters);
                    } else {
                        $(".homepage").css('display', 'block');
                        $(".signup").css('display', 'none');
                        $(".add_to_wishlist").css('display', 'none');
                        $(".loader").css('display', 'none');
                        $(".main_container").removeClass('processing');
                    }
                } else if (domainName == 'veepee.fr') {
                    // console.log(document.getElementById("root").innerHTML);
                    if(temp.querySelectorAll("section > div:nth-child(2) > div > div:nth-child(1)").length != 0){
                        product_title = temp.querySelectorAll("section > div:nth-child(2) > div > div:nth-child(1)")[0].innerHTML;
                    }
                    if(temp.querySelectorAll(".ioubec").length > 0){
                        product_title = temp.querySelectorAll('.ioubec')[0].innerText;
                    }
                    // console.log(temp.querySelectorAll('iframe').l);
                    if( temp.querySelectorAll('iframe').length != 0){
                        var iframe = temp.querySelectorAll('iframe')[0];
                        //console.log(chrome.extension.getURL(iframe.getAttribute('src')));
                        var xmlhttp = new XMLHttpRequest();
                        xmlhttp.open("GET", "https://www.veepee.fr"+iframe.getAttribute('src'), false);
                        xmlhttp.send();
                        var dimresp =  xmlhttp.responseText;
                        var dom = document.createElement('div');
                        dom.innerHTML = dimresp;
                        dom.querySelectorAll("dl.ftBloc").forEach(function(val,key){
                            // console.log(val.querySelectorAll("dt"));
                            if(val.querySelectorAll("dt")[0].innerText == 'Dimensions'){
                                var splitweight
                                if(val.querySelectorAll("dd p").length > 0){
                                    dom.querySelectorAll("dl.ftBloc").forEach(function(valu,k){
                                        if(valu.querySelectorAll("dd p")[k]){
                                            splitweight += valu.querySelectorAll("dd p")[k].innerHTML;
                                        }
                                    });
                                }else{
                                    splitweight = val.querySelectorAll("dd")[0].innerHTML;
                                }
                                console.log(splitweight);
                                var arr = splitweight.split("<br>");
                                len = arr.length;
                                for(i = 0; i < len; i++ ){
                                    if(arr[i].indexOf("Dimensions de l'emballage") == true){
                                        arr[i] && arr.push(arr[i].replace("\t",""));  // copy non-empty values to the end of the array
                                    }
                                    if(arr[i].indexOf("Poids ") == true){
                                        arr[i] && arr.push(arr[i].replace("\t",""));  // copy non-empty values to the end of the array
                                    }
                                }
                                // cut the array and leave only the non-empty values
                                if(val.querySelectorAll("dd p").length > 0){
                                    arr.splice(0 , len); 
                                    if(arr.length > 0 ){
                                        var newarry = arr[0].split(":");
                                        var newarry1 = arr[1].split(":");
                                        product_weight = newarry1[1];
                                        product_daimention = newarry[1];
                                    }
                                }else{
                                    if(arr.length < 2){
                                        product_weight = arr[0];
                                        product_daimention = arr[1];
                                    }else{
                                        product_daimention = arr[0];
                                        for(i = 0; i < len; i++ ){
                                            if(arr[i].indexOf("Poids ") == true){
                                                arr[i] && arr.push(arr[i].replace("\t",""));  // copy non-empty values to the end of the array
                                            }
                                        }
                                        for(i = 0; i < len; i++ )
                                            arr[i] && arr.push(arr[i].replace("\t",""));  // copy non-empty values to the end of the array
                                    
                                        arr.splice(0 , len);  // cut the array and leave only the non-empty values
                                        product_weight = arr[0];
                                    }
                                }
                            }
                            if(val.querySelectorAll("dt")[0].innerText == 'Poids et dimensions'){
                                var splitweight = val.querySelectorAll("dd p")[0].innerHTML;
                                // console.log(splitweight);
                                var arr = splitweight.split("<br>");
                                len = arr.length;
                                for(i = 0; i < len; i++ )
                                    arr[i] && arr.push(arr[i].replace("\t",""));  // copy non-empty values to the end of the array
                                
                                arr.splice(0 , len);  // cut the array and leave only the non-empty values
                                console.log(arr);
                                product_weight = arr[0];
                                product_daimention = arr[2];
                            }
                        });
                    }
                    if (product_title != '') {
                        product_price = temp.querySelectorAll("[class^=Prices] span")[0].innerText;
                        //console.log(product_price);
                        product_image = '<img src="' +  temp.querySelectorAll("button > ul > li:nth-child(1) > div")[0].getAttribute('src') + '"/>';
                        var id = localStorage.getItem("uniqueID");
                        //console.log(temp.innerHTML);
                        var parameters = {
                                'product_title': product_title,
                                'product_price': product_price,
                                'product_image': product_image,
                                'product_weight': product_weight,
                                'product_weight_1': '',
                                'product_daimention': product_daimention,
                                'domain_name': domainName,
                                'browser_id': id
                            }
                            // console.log(parameters);
                        sendAjax(parameters);
                    } else {
                        $(".homepage").css('display', 'block');
                        $(".signup").css('display', 'none');
                        $(".add_to_wishlist").css('display', 'none');
                        $(".loader").css('display', 'none');
                        $(".main_container").removeClass('processing');
                    }

                } else if (domainName == 'amazon.fr') {
                    if (temp.getElementsByClassName('a-size-large product-title-word-break').length > 0) {
                        product_title = temp.getElementsByClassName('a-size-large product-title-word-break')[0].innerHTML;
                    } else if (temp.getElementsByClassName('a-size-extra-large').length > 0) {
                        product_title = temp.getElementsByClassName('a-size-extra-large')[0].innerHTML;
                    }
                    if (product_title != "") {
                        if (temp.getElementsByClassName('imgTagWrapper').length > 0) {
                            product_image = temp.getElementsByClassName('imgTagWrapper')[0].innerHTML;
                        } else if (temp.getElementsByClassName('image-stretch-vertical').length > 0) {
                            product_image = temp.getElementsByClassName('image-stretch-vertical')[0].outerHTML;
                        } else if (temp.getElementsByClassName('image-stretch-horizontal').length > 0) {
                            product_image = temp.getElementsByClassName('image-stretch-horizontal')[0].outerHTML;
                        } else if (temp.getElementsByClassName('a-dynamic-image frontImage').length > 0) {
                            product_image = temp.getElementsByClassName('a-dynamic-image frontImage')[0].outerHTML;
                        } else {
                            product_image = '<img src="https://zouto.store/logos/logo_panier.png">';
                        }
                        if (temp.getElementsByClassName('a-size-medium a-color-price priceBlockBuyingPriceString').length > 0 || temp.getElementsByClassName('a-size-medium a-color-price priceBlockSalePriceString').length > 0 || temp.getElementsByClassName('a-size-medium a-color-price priceBlockDealPriceString').length > 0 || temp.getElementsByClassName('a-size-mini a-link-normal').length > 0 || temp.getElementsByClassName('a-size-base a-color-price a-color-price').length > 0) {
                            if (temp.getElementsByClassName('a-size-medium a-color-price priceBlockBuyingPriceString').length > 0) {
                                // console.log('iyy')
                                product_price = temp.getElementsByClassName('a-size-medium a-color-price priceBlockBuyingPriceString')[0].innerHTML;
                                console.log(product_price)
                            } else if (temp.getElementsByClassName('a-size-medium a-color-price priceBlockSalePriceString').length > 0) {
                                // console.log('kjjkj')
                                product_price = temp.getElementsByClassName('a-size-medium a-color-price priceBlockSalePriceString')[0].innerHTML;
                            } else if (temp.getElementsByClassName('a-size-medium a-color-price priceBlockDealPriceString').length > 0) {
                                // console.log('trrr')
                                product_price = temp.getElementsByClassName('a-size-medium a-color-price priceBlockDealPriceString')[0].innerHTML;
                            } else if (temp.getElementsByClassName('a-size-mini a-link-normal').length > 0) {
                                var str = temp.getElementsByClassName('a-size-mini a-link-normal')[0].innerHTML;
                                var res = str.split("</span>");
                                product_price = res[1];
                                // console.log('yyy')
                                if (product_price != "" && temp.getElementsByClassName('a-size-base a-color-price a-color-price').length > 0) {
                                    // console.log('oioi')
                                    product_price = temp.getElementsByClassName('a-size-base a-color-price a-color-price')[0].innerHTML;
                                }
                            }
                            // else if(temp.getElementsByClassName('a-price-whole').length > 0) {
                            // 	var product_price0 = temp.getElementsByClassName('a-price-whole')[0].innerHTML;
                            // 	var product_price1 = temp.getElementsByClassName('a-price-fraction')[0].innerHTML;
                            // 	if(product_price0 != "" && product_price1 != ""){
                            // 		product_price =  product_price0+'.'+product_price1;
                            // 	}
                            // 	console.log(product_price)
                            // }

                            console.log(product_price)
                        }
                        if (temp.getElementsByClassName('a-unordered-list a-nostyle a-vertical a-spacing-none detail-bullet-list').length > 0) {
                            product_weight = temp.getElementsByClassName('a-unordered-list a-nostyle a-vertical a-spacing-none detail-bullet-list')[0].innerHTML;
                        }
                        if (temp.getElementsByClassName('a-expander-content a-expander-section-content a-section-expander-inner').length > 0) {
                            product_weight_1 = temp.getElementsByClassName('a-expander-content a-expander-section-content a-section-expander-inner')[0].innerHTML;
                        }
                        if (temp.getElementsByClassName('a-section feature detail-bullets-wrapper bucket').length > 0) {
                            product_daimention = temp.getElementsByClassName('a-section feature detail-bullets-wrapper bucket')[0].innerHTML;
                        } else {
                            product_daimention = '';
                        }
                        // if (temp.getElementsByClassName('a-row a-expander-container a-expander-inline-container').length > 0) {
                        // 	product_daimention_1 = temp.getElementsByClassName('a-row a-expander-container a-expander-inline-container')[0].innerHTML;
                        // }else{
                        // 	product_daimention_1 = '';
                        // }
                        var id = localStorage.getItem("uniqueID");
                        var parameters = {
                            'product_title': product_title,
                            'product_price': product_price,
                            'product_image': product_image,
                            'product_weight': product_weight,
                            'product_weight_1': product_weight_1,
                            'product_daimention': product_daimention,
                            'domain_name': domainName,
                            'browser_id': id
                        }
                        sendAjax(parameters);
                    } else {
                        $(".homepage").css('display', 'block');
                        $(".signup").css('display', 'none');
                        $(".add_to_wishlist").css('display', 'none');
                        $(".loader").css('display', 'none');
                        $(".main_container").removeClass('processing');
                    }
                }
            });
            return false;
        }
    });
}


function sendAjax(parameters) {
    $.ajax({
        type: 'POST',
        url: 'https://zouto.store/get_info.php',
        data: parameters,
        success: function(res) {
            // console.log(res)
            var obj = JSON.parse(res);
            if (obj.name != '') {
                // $(".product_title").html('Product Name: '+obj.name)
                $(".product_title").html(obj.name)
            }
            if (obj.price != '') {
                $(".product_price").html('Prix du produit: ' + obj.price)
            }
            if (obj.weight != '') {
                $(".product_weight").html('Poids du produit: ' + obj.weight)
            }

            if (obj.depth != '' && obj.depth != null) {
                $(".product_depth").html('Profondeur du produit: ' + obj.depth)
            }
            if (obj.height != '' && obj.height != null) {
                $(".product_height").html('Hauteur du produit: ' + obj.height)
            }
            if (obj.width != '' && obj.width != null) {
                $(".product_width").html('Largeur du produit: ' + obj.width)
            }
            if (obj.daimention != '' && obj.daimention != null) {
                $(".product_daimention").html('Dimensions du produit: ' + obj.daimention)
            }
            $('.product_image').attr("src", obj.product_image);
            $('.logo').attr("src", obj.logo);
            $('.logo').css('background', '#293847')
            $(".added_data").html(obj.html_data)
                // if (obj.html_data != null) {
                // 	$(".clear_list").css('display','block')
                // }
            $(".loader").css('display', 'none');
            $(".main_container").removeClass('processing');
            return false;
        }
    });
}

function getCurrentTabUrl(callback) {
    // Query filter to be passed to chrome.tabs.query - see
    // https://developer.chrome.com/extensions/tabs#method-query
    var queryInfo = {
        active: true,
        currentWindow: true
    };
    chrome.tabs.query(queryInfo, function(tabs) {
        //   console.log(tabs);
        // chrome.tabs.query invokes the callback with a list of tabs that match the
        // query. When the popup is opened, there is certainly a window and at least
        // one tab, so we can safely assume that |tabs| is a non-empty array.
        // A window can only have one active tab at a time, so the array consists of
        // exactly one tab.
        var tab = tabs[0];

        // A tab is a plain object that provides information about the tab.
        // See https://developer.chrome.com/extensions/tabs#type-Tab
        var url = tab.url;

        // tab.url is only available if the "activeTab" permission is declared.
        // If you want to see the URL of other tabs (e.g. after removing active:true
        // from |queryInfo|), then the "tabs" permission is required to see their
        // "url" properties.
        console.assert(typeof url == 'string', 'tab.url should be a string');
        callback(url);
    });

}

$.urlParam = function(name, url) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url);
    if (results == null) {
        return null;
    } else {
        return results[1] || 0;
    }
}