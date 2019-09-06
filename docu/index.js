
    //console.log打印普通log日志信息
    document.querySelector("#log").addEventListener("click", () => {
        console.log("Hello,World!");
    });

    //console.warn打印告警信息
        document.querySelector("#warn").addEventListener("click", () => {
        console.warn("抱歉，请您输入正确的value（try-catch流程）");
    });

    //console.error打印错误信息
        document.querySelector("#hal").addEventListener("click", () => {
        console.error("I'm sorry,Dave. I'm afraid I can't do that. ");
    });

    //console.table打印表格信息
        document.querySelector("#table").addEventListener("click", () => {
        console.table([
            { short: "JS", long: "JavaScript", version: "ES6" },
            { short: "CSS", long: "Casting Style Sheet", version: "CSS 3.0" },
            { short: "HTML", long: "Hyper Text Markup Language" }
        ]);
    });

    //console.group打印信息组
        document.querySelector("#group").addEventListener("click", () => {
            const label = "使用console打印group一组信息";
    console.group(label);
    console.info("Log");
    console.info("Warning");
    console.info("Error");
    console.info("Network");
    console.groupEnd(label);
});

//console自定义样式
        document.querySelector("#custom").addEventListener("click", () => {
            const spacing = "5px";
            const styles = "padding: ${spacing}; background-color: darkblue; border: ${spacing} solid crimson; font-size: 2em ;font-styles: italic"
    console.log("%c这里展示定制的样式", styles);
});

//网络错误Log打印
        document.querySelector("#network").addEventListener("click", e => {
        fetch("/network");
    });

