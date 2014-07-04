$('#pt-lang').click(function()
    {
        var page = getUrlPage();
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
                        var id = $(this).attr('id');
                        var text = $(this).find(language).text();
                        $('#' + id).html(text);
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
        var page = getUrlPage();
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
                        var id = $(this).attr('id');
                        var text = $(this).find(language).text();
                        $('#' + id).html(text);
                    });
            },
            error: function(err)
            {
              console.log(err)
            }
        });
    });

    $(function()
    {
        var page = getUrlPage();
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
                        var id = $(this).attr('id');
                        var text = $(this).find(language).text();
                        $('#' + id).html(text);
                    });
            },
            error: function(err)
            {
              console.log(err)
            }
        });
    });

function getUrlPage(){
    var _URL = document.URL;
    var parsed_url = _URL.split('/');

    if(parsed_url[parsed_url.length-1] === 'index.html')
    {
        return 'index';
    }
    else
    {
        return 'social';
    }

}