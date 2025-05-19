$(function () {
    $('#gyuhun').fullpage({
        // sectionsColor : ['#fafafa', '#fefefe', 'fafafa', 'fefefe', 'fafafa', 'fefefe'],
        navigation: true,
        navigationTooltips: ['Main', 'About Me', 'Projects - Video', 'Projects - Moving Poster', 'Publications', 'Thanks'],
        navigationPosition: 'left',
        responsiveWidth: 1000,
    })
    // 풀페이지

    $('.video div').each(function (index, el) {
        $(el).mouseenter(function () {
            $(this).find('video')[0].play()
        })
        $(el).mouseleave(function () {
            $(this).find('video')[0].pause()
            $(this).find('video')[0].currentTime = 0
        })
        $(el).click(function(){
            const title1 = $(this).find('.d1').text()
            const title2 = $(this).find('.d2').text()
            const title3 = $(this).find('.d3').text()
            const title4 = $(this).find('.d4').text()
            const videoSrc = $(this).find('video').attr('src')

            $('.popup').find('.p1').text(title1)
            $('.popup').find('.p2').text(title2)
            $('.popup').find('.p3').text(title3)
            $('.popup').find('.p4').text(title4)
            $('.popup').find('video').attr('src', videoSrc)

            $('.popup').addClass('on')
            $('.popup').find('video')[0].play()
        })

        $('.popup button').click(function(){
            $('.popup').removeClass('on') 
            $('.popup').find('video')[0].pause()
            $('.popup').find('video')[0].currentTime = 0
        })
    })

    const $descBox = $('#video-description')
    const defaultDesc = $descBox.html()

    $('.projects-video').on('mouseenter', function () {
        const id = $(this).data('desc')
        const html = $('#' + id).html()
        $descBox.html(html)
    })

    $('.projects-video').on('mouseleave', function () {
        $descBox.html(defaultDesc)
    })
    // 비디오 페이지

    $('.poster div').each(function (index, el) {
        $(el).mouseenter(function () {
            $(this).find('video')[0].play()
        })
        $(el).mouseleave(function () {
            $(this).find('video')[0].pause()
            $(this).find('video')[0].currentTime = 0
        })

        $(el).click(function(){
            const title1 = $(this).find('.d1').text()
            const title2 = $(this).find('.d2').text()
            const title3 = $(this).find('.d3').text()
            const title4 = $(this).find('.d4').text()
            const videoSrc = $(this).find('video').attr('src')

            $('.popup2').find('.p1').text(title1)
            $('.popup2').find('.p2').text(title2)
            $('.popup2').find('.p3').text(title3)
            $('.popup2').find('.p4').text(title4)

            $('.popup2').find('video').attr('src', videoSrc)

            $('.popup2').addClass('on')
            $('.popup2').find('video')[0].play()
        })

        $('.popup2 button').click(function(){
            $('.popup2').removeClass('on') 
            $('.popup2').find('video')[0].pause()
            $('.popup2').find('video')[0].currentTime = 0
        })
    })

    const $desc_Box = $('#poster-description')
    const defaultDesc_ = $desc_Box.html()

    $('.projects-poster').on('mouseenter', function () {
        const id = $(this).data('desc')
        const html = $('#' + id).html()
        $desc_Box.html(html)
    })

    $('.projects-poster').on('mouseleave', function () {
        $desc_Box.html(defaultDesc_)
    })
})

// 무빙포스터

