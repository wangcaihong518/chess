$(function(){
    let chess = $('.chess');
    let flag = true;//用flag判断是白棋还是黑棋
    let hei = {},bai = {};//用对象存放点击到的pos，方便计算个数
    // 创建棋子
    for(let i = 0; i < 20; i ++){
        for(let j = 0; j < 20; j ++){
            $('<div>').addClass('qizi').data('pos',i+'_'+j).appendTo(chess);
        }
    }

    chess.on('click','.qizi',function(){
        if($(this).hasClass('hei') || $(this).is('.bai')){
            return;
        }
        flag = !flag;
        let pos = $(this).data('pos');
        // 判断是黑子还是白子
        if(!flag){
            $(this).addClass('hei');
            hei[pos] = true;
            console.log('hei');
            console.log(calc(hei, pos));
            if(calc(hei,pos) == 5){
                chess.off('click');
                alert("黑棋获胜");
                if($('.qizi').hasClass('hei') || $('.qizi').is('bai')){
                    $('.qizi').removeClass('hei');
                    $('.qizi').removeClass('white');
                }

            }
        }else {
            $(this).addClass('white');
            bai[pos] = true;
            console.log('bai');
            console.log(calc(bai, pos));
            if(calc(bai,pos) == 5){
                chess.off('click');
                alert("白棋获胜");
                if($('.qizi').hasClass('hei') || $('.qizi').is('bai')){
                    $('.qizi').removeClass('hei');
                    $('.qizi').removeClass('white');
                }

            }

        }
    });
    // 计算黑白这两个对象的个数
    function calc(obj,pos){
        let x = pos.split('_')[0],y = pos.split('_')[1];
        let heng = 1, shu = 1, zx = 1, yx = 1;
        let index = y;
        while(obj[x+'_'+ ++index]){
            heng ++;
        }
        index = y;
        while(obj[x+'_'+ --index]){
            heng ++;
        }
        index = y;
        let index1 = x;
        while(obj[++index1+'_'+index]){
            shu ++;
        }
        index = y;
        index1 = x;
        while(obj[--index1+'_'+index]){
            shu ++;
        }
        index = y;
        index1 = x;
        while(obj[++index1+'_'+ ++index]){
            zx ++;
        }
        index = y;
        index1 = x;
        while(obj[--index1+'_'+ --index]){
            zx ++;
        }
        index = y;
        index1 = x;
        while(obj[--index1+'_'+ --index]){
            yx ++;
        }
        index = y;
        index1 = x;
        while(obj[++index1+'_'+ ++index]){
            yx ++;
        }
        return Math.max(heng,shu,zx,yx);
    }


});
