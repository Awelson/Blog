# マジで道草食ってるやつ

<div id="player"></div>
<div id="text-display" align="center">Text</div>
<div id="timestamps" markdown>
**Relevant Vocabulary:**
    <div class="timestamp" data-time="１"> <h3>監督</h3> </div>
- boss, supervisor, coach, etc..
- \-suru verb (to supervise)
    <div class="timestamp" data-time="2"> <h3>部活</h3> </div>
- club (school), extracurricular
    <div class="timestamp" data-time="5"> <h3>道草を食う</h3> </div>
- A japanese proverb : to loiter around (while on the way to somewhere)
- Literally this means : to eat roadside grass
    <div class="timestamp" data-time="8"> <h3>寄り道</h3> </div>
- detour
- \-suru verb (to take a detour)
    <div class="timestamp" data-time="10"> <h3>真剣</h3> </div>
- seriously, earnestly
- real sword (as opposed to practice sword)
    <div class="timestamp" data-time="12"> <h3>サボる</h3> </div>
- Shortening of "sabotage" (サボタージュ)
- to slack off, skip class, etc...
    <div class="timestamp" data-time="22"> <h3>油売る</h3> </div>
- Another Japanese proverb : loafing around, slacking off, etc..
- Literally : to sell oil
    <div class="timestamp" data-time="26"> <h3>無駄話</h3> </div>
- chit-chat, gossip
    <div class="timestamp" data-time="27"> <h3>繁盛</h3> </div>
- thriving, flourishing
    <div class="timestamp" data-time="31"> <h3>半額</h3> </div>
- half price
    <div class="timestamp" data-time="31"> <h3>売り切れる</h3> </div>
- to be sold out
    <div class="timestamp" data-time="39"> <h3>時間潰す</h3> </div>
- to kill time
- 潰す : to smash, crush, slaughter (livestock), etc...
    <div class="timestamp" data-time="40"> <h3>物理に</h3> </div>
- physically, literally
    <div class="timestamp" data-time="42"> <h3>暇</h3> </div>
- free time, spare time
    <div class="timestamp" data-time="44"> <h3>圧縮</h3> </div>
- compression
- \-suru verb (to compress)
</div>


<!--- SCRIPTS>
<--->

<script src="https://www.youtube.com/iframe_api"></script>
<script>
    let player;
    let timePoints = [
        { time: 5, text: "道草を食う is a Japanese proverb meaning : to loiter around, but he's literally eating roadside grass lol" },
        { time: 9, text: " " },
        { time: 22, text: "This time he's actually selling oil, \"油を売る\" another Japanese proverb for loitering around and slacking off, etc..." },
        { time: 26, text: " \"He's not just gossiping or chatting around...\" \n The proverb originates from the Edo period : there were people who sold hair oil and engaged in idle chatter with women while doing business, leading to slacking off at work. " }
        { time: 30, text: " " },
        { time: 39, text: " \"Time is breaking...\" " },
        { time: 40, text: " \"like in a physical, literal sense it is breaking.\" " },
        { time: 44, text: " " },
    ];
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '360',
            width: '640',
            videoId: 'q5QVX7BCnUk',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
    function onPlayerReady(event) {
        event.target.playVideo();
        setupTimestamps();
    }
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            setInterval(checkTime, 1000); // Check the video time every second
        }
    }
    function checkTime() {
        let currentTime = player.getCurrentTime();
        for (let i = 0; i < timePoints.length; i++) {
            if (Math.floor(currentTime) === timePoints[i].time) {
                document.getElementById('text-display').innerText = timePoints[i].text;
                break;
            }
        }
    }
    function setupTimestamps() {
        let timestampElements = document.querySelectorAll('.timestamp');
        timestampElements.forEach(el => {
            el.onclick = () => {
                let time = parseInt(el.getAttribute('data-time'));
                player.seekTo(time);
            };
        });
    }
</script>