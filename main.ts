#!/usr/bin/env node
import inquirer from"inquirer"
const ans=await inquirer.prompt([ 
    {mes:"Enter first num",type:"number",name:"firstnum"},
{mes:"Enter second num",type:"number",name:"secondnum"},
{mes:"Select one operater",type:"list",name:"operater",choices:["Add","Subtract","Multiply","Divde"]

}]);

    
if 
(ans.operater === "Add"){ console.log("your answer is",ans.firstnum+ans.secondnum)}
    
 else if
(ans.operater === "Subtract"){
    console.log("your answer is",ans.firstnum - ans.secondnum)

}
else if
(ans.operater === "Multiply"){
    console.log("your answer is",ans.firstnum*ans.secondnum)

}else if
(ans.operater === "Divde"){
    console.log("your answer is",ans.firstnum/ans.secondnum,
 )
    

} 
else ("invalid num");
