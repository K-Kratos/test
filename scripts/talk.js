new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("祝我的小艾：")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("生日快乐! 新年快乐！情人节快乐！ 总之天天都快乐！♥")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();