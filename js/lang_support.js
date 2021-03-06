$('#pt-lang').click(function()
{
    var page     = getUrlPage();
    var xml_file = 'languages/' + page + '-languages.xml';

    localStorage.setItem('lang', 'portuguese')
    var language = 'portuguese';
    $.ajax(
    {
        url: xml_file,
        success: function(xml)
        {
            $(xml).
                find('translation').
                each(function()
                {
                    var id      = $(this).attr('id');
                    var split   = id.split("-");

                    if(split[1] === 'form')
                    {
                        setPlaceholders(this, language, id);
                    }
                    else
                    {
                        var text = $(this).find(language).text();
                        $('#' + id).html(text);
                    }
                });
        },
        error: function(err)
        {
          console.log(err)
        }
    });
});

$('#en-lang').click(function()
{
    var page     = getUrlPage();
    var xml_file = 'languages/' + page + '-languages.xml';

    localStorage.setItem('lang', 'english')
    var language = 'english';
    $.ajax(
    {
        url: xml_file,
        success: function(xml)
        {
            $(xml).
                find('translation').
                each(function()
                {
                    var id      = $(this).attr('id');
                    var split   = id.split("-");

                    if(split[1] === 'form')
                    {
                        setPlaceholders(this,language,id);
                    }
                    else
                    {
                        var text = $(this).find(language).text();
                        $('#' + id).html(text);
                    }
                });
        },
        error: function(err)
        {
          console.log(err)
        }
    });
});

$(document).ready(function()
{

    var page     = getUrlPage();
    var xml_file = 'languages/' + page + '-languages.xml';

    var language = localStorage.getItem('lang');
    if(language === null)
    {
        language = 'english';
        localStorage.setItem('lang', 'english');
    }

    $.ajax(
    {
        url: xml_file,
        success: function(xml)
        {
            $(xml).
                find('translation').
                each(function()
                {
                    var id    = $(this).attr('id');
                    var split = id.split("-");

                    if(split[1] === 'form')
                    {
                        setPlaceholders(this, language, id);
                    }
                    else
                    {
                        var text = $(this).find(language).text();
                        $('#' + id).html(text);
                    }
                });
        },
        error: function(err)
        {
          console.log(err)
        }
    });
});

function getUrlPage()
{
    var _URL        = document.URL;
    var parsed_url  = _URL.split('/');

    var parser      = parsed_url[parsed_url.length-1].split('#');
    var buy_parser  = parsed_url[parsed_url.length-1].split('?');

    if(parser === undefined){
        if(parsed_url[parsed_url.length-1] === 'index.html')
        {
            return 'index';
        }
        else if(parsed_url[parsed_url.length-1] === 'social.html')
        {
            return 'social';
        }
        else if(parsed_url[parsed_url.length-1] === 'buy.html')
        {
            return 'buy';
        }
        else
        {

            return 'index';
        }
    }
    else if(buy_parser.length > 1){
        if(buy_parser[0] === 'index.html')
        {
            return 'index';
        }
        else if(buy_parser[0] === 'social.html')
        {
            return 'social';
        }
        else if(buy_parser[0] === 'buy.html')
        {
            return 'buy';
        }
        else
        {
            return 'index';
        }
    }
    else
    {
        if(parser[0] === 'index.html')
        {
            return 'index';
        }
        else if(parser[0] === 'social.html')
        {
            return 'social';
        }
        else if(parser[0] === 'buy.html')
        {

            return 'buy';
        }
        else
        {
            return 'index';
        }
    }

}

function setPlaceholders(xml, language, id)
{
    var text = $(xml).find(language).text();
    $('#' + id).attr("placeholder", text);
}
