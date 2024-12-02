
function onSource1(args) {
    console.log("onSource");
    const captcha = document.querySelector(
        ".homeForm1 #requestBox input[name='captcha']"
    ).value;
    const captchaid = document.querySelector(
        ".homeForm1 #requestBox input[name='captchaid']"
    ).value;
    const stringJson = JSON.stringify(args.source?.rows[0]);
    console.log("stringJson", stringJson);
    $bc.setSource("edit.object1", {
        value: stringJson,
        captcha: captcha,
        captchaid: captchaid,
    });
}
document.querySelector(".signUpBtn").addEventListener("click",function (params) {
    document.querySelector(".modal").classList.remove("successForm")

})
let responsMsg = document.querySelector(".responsMsg1");
let responsMsgIn = document.querySelector(".responsMsg1 span");

async function OnProcessedEditObject1(args) {
    console.log("OnProcessedEditObject1");
    const response = args.response;
    const json = await response.json();

    if (json.errorid == 6) {
        console.log(json);
        // responsMsgIn.innerHTML = "فرم با موفقیت ثبت شد.";
        // responsMsg.style.display = "block";
        document.querySelector(".modal").classList.add("successForm")
        setTimeout(() => {
            responsMsg.style.display = "none";
        }, 2000);
    }
    if (json.errorid == 4) {
        console.log(json);
        responsMsgIn.innerHTML = "لطفا کپچا را به درستی وارد کنید.";

        responsMsg.style.display = "block";

        setTimeout(() => {
            responsMsg.style.display = "none";
        }, 2000);
    }
}

function renderFn1(params) {
    let questions = document.querySelectorAll(
        ".homeForm1 div[data-bc-question]"
    );
    questions.forEach((element) => {
        let title = element.querySelector(
            ".homeForm1 [data-bc-question-title]"
        );
        let qInput = element.querySelector(".homeForm1 input");
        let qTxtArea = element.querySelector(".homeForm1 _textarea");
        if (title) {
            title = element.querySelector(
                ".homeForm1 [data-bc-question-title]"
            ).innerHTML;
            if (qInput) {
                qInput.setAttribute("placeholder", title);
            } else if (qTxtArea) {
                qTxtArea.setAttribute("placeholder", title);
            }
        }
        console.log("q", qInput);
    });


}

let submitBtn= document.querySelector(".submitBtn")
submitBtn.addEventListener("click",function (params) {
const captcha = document.querySelector(
        ".homeForm1 #requestBox input[name='captcha']"
    ).value;
    if (captcha=="") {
        responsMsgIn.innerHTML = "لطفا کپچا را وارد کنید.";

responsMsg.style.display = "block";

setTimeout(() => {
responsMsg.style.display = "none";
}, 2000);   
    }
})