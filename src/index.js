window.onload = function () {
    function start() {
        let str = ' 这个世界上，总有一件事，值得持之以恒这个世界上，总有一个人，值得奋不顾身在最好的年华，遇到最好的你一段缘，就这样不期而遇，我不知道该用怎样的诗句，能让你解读品味那份爱的思绪；一份情，就这样不言而喻我想跟你走长长的路，从街头走到巷尾，手牵着手，人潮喧嚣涌动，你我却寂静相拥。 我不怕天黑也不怕鬼你的皱眉假若我们不曾相遇，我不知道在世界的某个地方，还有一个如此美丽动人你将我等待。每天爱你多一点我们的幸福就会多一点。我在遥远的江南，等你。如果你愿意，我愿用一支瘦笔，在墨香里揉进所有的情，醉在有你的时光里。'
        let str_ = ''
        let i = 0
        let content = document.getElementById('contents')
        let timer = setInterval(() => {
            if (str_.length < str.length) {
                str_ += str[i++]
                //打印时加光标
                content.innerHTML = '<p>' + str_ + '_</p>'
            } else {
                clearInterval(timer)
                content.innerHTML = '<p>' + str_ + '</p>'
            }
        }, 100)
    }

    function getTime() {
        let curTime = Date.parse(new Date())
        let targetTime = Date.parse(new Date("2021-06-21 22:45:00"))
        let timeDifference = (curTime - targetTime) / 1000
        console.log('timeDifference', timeDifference)
        let ss = Math.floor(timeDifference % 60)
        let mm = Math.floor(timeDifference / 60 % 60)
        let hh = Math.floor(timeDifference / 3600 % 24)
        let day = Math.floor(timeDifference / 3600 / 24)
        document.getElementById('footer').innerHTML = `我们已经相识:${day}天${hh}时${mm}分${ss}秒`
    }
    window.start = start
    window.getTime = getTime
}