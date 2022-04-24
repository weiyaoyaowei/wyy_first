var data = [{
    "name": "introduction",
    "text": "2019冠状病毒病（英语：Coronavirus disease 2019，缩写：COVID-19），是一种由严重急性呼吸系统综合征冠状病毒引发的传染病。该病最早于2019年末于湖北省武汉市发现，其后此病在全球各国大规模爆发并急速扩散。截至2020年11月7日，全球已有190个国家和地区累计报告逾4,948.2万名确诊病例，逾124万名患者死亡，目前仍在持续扩散中。",
    "address": "covid_material/logo/synopsis_logo.png"
},
{
    "name": "spread",
    "text": "病毒主要通过口鼻分泌物传播，包括咳嗽、打喷嚏和说话产生的呼吸道飞沫。这些飞沫通常不会在空气中长距离传播。但是，站在近处的人可能会因吸入这些飞沫而被感染。人们也可能通过接触受污染的表面，然后再接触自己的脸而受到感染。在封闭的空间内，也可能通过能够在空气中悬浮较长时间的气溶胶传播。",
    "address": "covid_material/logo/spread_logo.png"
},
{
    "name": "symptom", 
    "text": "人感染了冠状病毒后常见体征有呼吸道症状、发热、咳嗽、气促和呼吸困难等。在较严重病例中，感染可导致肺炎、严重急性呼吸综合征、肾衰竭，甚至死亡。虽然大多数人的症状较轻，但有些人可能因细胞素风暴、多重器官衰竭、败血性休克和血栓而出现急性呼吸窘迫综合征（ARDS）。从感染到出现症状的时间通常为5天左右，但可能在2至14天之间。",
    "address": "covid_material/logo/symptom_logo.png"
},
{ "name": "prevention", 
"text": "预防感染的建议措施包括经常洗手、与他人保持社交距离、隔离检疫、掩盖咳嗽、避免触摸眼、鼻、口。在公共场所佩戴口罩可以减少传播的风险。",
 "address": "covid_material/logo/prevention_logo.png"
 }]
 //定义4个结构体数组来存储4组数据
function clickshow(n) {
    var a = document.querySelector("#information");
    var b = document.querySelector(".temp_image");
    a.innerHTML= data[n].text;//改变文本内容
    b.src =""+data[n].address;//改变临时图片的地址
   
}