
$(function () {
    console.log('list.js');
    
    var $bookTable = $('#bookTable').hide();
    console.log($bookTable);
    
   var statusClasses = {
    'new': 'info',
    'reading': 'default',
    'ready': 'success',
    'giving': 'warning',
    'pending': 'info',
};

    var types = Object.keys(statusClasses);
    
    var rows = {};
    types.forEach(function (type) {
        var $trs = $bookTable.find('tbody tr .label-'+statusClasses[type]).closest('tr');
        rows[type] = $trs;
    });
    console.log(rows);
    
    var $ul = $('<ul class="nav nav-tabs" role="tablist"></ul>');
    types.forEach(function(type) {
        var $li = $('<li role="presentation"><a href="#'+type+'" aria-controls="'+type+'" role="tab" data-toggle="tab">'+type+'</a></li>');
        $ul.append($li);
    });
    $ul.children().eq(0).addClass('active');
   
    var $tabContent = $('<div class="tab-content"></div>');
    types.forEach(function(type) {
        var $table = $(
            '<div role="tabpanel" class="tab-pane fade" id="'+type+'">' +
                '<table class="table table-striped table-hover">' +
                    '<thead>' +
                        '<tr>' +
                            '<th>Időpont</th>' +
                            '<th>Státusz</th>' +
                            '<th>Író</th>' +
                            '<th>Cím</th>' +
                            '<th>Leírás</th>' +
                            '<th></th>' +
                        '</tr>'    +
                    '</thead>' +
                    '<tbody>' +
                        
                    '</tbody>' +
                '</table>' +
            '</div>'    
        );
        $table
            .find('tbody')
                .append(rows[type])
                .end()
            .appendTo($tabContent);
    });
    $tabContent.find('.tab-pane').eq(0).addClass('active').addClass('in')
    
    var $div = $('<div />');
    $div.append($ul);
    $div.append($tabContent);
    
    $bookTable.before($div);
    
});