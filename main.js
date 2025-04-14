ans = ""

function callNum(myvar)
{
    take = myvar.innerText
    if(take == "x")
    {
        take = "*";
    }
    ans = ans + take;
    let displayvalue = ans.replace(/\*/g, 'x');
    document.querySelector(".inputBox").value = displayvalue;
}

function callClear()
{
    document.querySelector(".inputBox").value = "0";
    ans = ""
}
callClear()

function callAns()
{
    result = eval(ans);
    document.querySelector(".inputBox").value = result;
    ans = result;
}

function callnegate(myvar)
{
    len = ans.length - 1;
    ans = ans * -1;
    document.querySelector(".inputBox").value = ans;
}

