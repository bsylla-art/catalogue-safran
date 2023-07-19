
var emailGestionnaire = "user@example.com"; //document.getElementById("divEmailGest").textContent;
function openOutlook(ref) {
    var email = emailGestionnaire;
    var subject = "Commande Claviers Souris";
    var body = `Bonjour, %0D%0A Je commande le produit dont la référence : ` + ref + `.  %0D%0A Cordialement.`;
    if (email == "") {
        alert("Selectionnez votre gestionnaire s'il vous plait!!");
    }
    else {
        window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
    }
}

function showData(datafile, divId) {
    fetch(datafile)
        .then((response) => response.json())
        .then((res) => {
            const data = res.clavier_souris;
            const div0 = document.getElementById(divId)
            // Iterate over the data array
            for (let i = 0; i < data.length; i += 4) {


                const div1 = document.createElement("div");
                div1.classList.add("overlap-group-container");

                for (let j = i; j < Math.min(i + 4, data.length); j++) {

                    const item = data[j];
                  

                    const div1_1 = document.createElement("div");
                    div1_1.classList.add("overlap-group-container-2");
                    div1_1.classList.add("overlap-group-container-4");
                    div1_1.setAttribute("ondblclick", `openOutlook('${item.ref}')`);

                    //div1_2
                    const div1_2 = document.createElement("div");
                    div1_2.classList.add("overlap-group");

                    const div1_2_1 = document.createElement("div");
                    div1_2_1.classList.add("rectangle-97");

                    const imag1_2_1 = document.createElement("img");
                    imag1_2_1.classList.add("cdp2hd-10");
                    imag1_2_1.src = item.urlImg;
                    imag1_2_1.alt = "cdp2hd 10";

                    div1_2.appendChild(div1_2_1);
                    div1_2.appendChild(imag1_2_1);

                    div1_1.appendChild(div1_2);

                    //div1_3
                    const div1_3 = document.createElement("div");
                    div1_3.classList.add("overlap-group-1");

                    const div1_3_1 = document.createElement("div");
                    div1_3_1.classList.add("rectangle-70");


                    const p1_3_1 = document.createElement("p");
                    p1_3_1.classList.add("adaptateur-hdmi-to-usb-c");
                    p1_3_1.classList.add("inter-extra-bold-tundora-14px");
                    const span1_3_1 = document.createElement("span");
                    span1_3_1.classList.add("inter-extra-bold-tundora-14px");
                    span1_3_1.style = "line-height: 10.2px;top: 10px;white-space: break-spaces;position: absolute;width: 194px; right: 10px;";
                    span1_3_1.innerHTML = item.nom;
                    p1_3_1.appendChild(span1_3_1);


                    const p1_3_2 = document.createElement("p");
                    p1_3_2.classList.add("cet-adaptateur-perme");
                    p1_3_2.classList.add("inter-normal-tundora-12px");
                    const span1_3_2 = document.createElement("span");
                    span1_3_2.classList.add("inter-normal-tundora-12px");
                    span1_3_2.classList.add("text-space");
                    span1_3_2.style = "white-space: break-spaces;position: absolute;width: 194px; right: 10px;";
                    span1_3_2.innerHTML = item.description;
                    p1_3_2.appendChild(span1_3_2);


                    const p1_3_3 = document.createElement("p");
                    p1_3_3.classList.add("adaptateur-hdmi-to-usb-c");
                    p1_3_3.classList.add("inter-extra-bold-tundora-14px");
                    const span1_3_3 = document.createElement("span");
                    span1_3_3.classList.add("inter-extra-bold-tundora-14px");
                    span1_3_3.style = "line-height: 10.2px;top: 120px;white-space: break-spaces;position: absolute;width: 194px; right: 10px;";
                    span1_3_3.innerHTML = "Ref : " + item.ref;
                    p1_3_3.appendChild(span1_3_3);


                    const div1_3_2 = document.createElement("div");
                    div1_3_2.classList.add("usb-c");
                    div1_3_2.style = "top: 70px;";

                    const img1_3_2_1 = document.createElement("img");
                    img1_3_2_1.classList.add("istockphoto-1138477098-612x612-10");
                    img1_3_2_1.src = item.urlImgCable;
                    img1_3_2_1.alt = "istockphoto-1138477098-612x612 10";

                    const div1_3_2_1 = document.createElement("div");
                    div1_3_2_1.classList.add("usb-c-1");
                    div1_3_2_1.classList.add("inter-extra-bold-tundora-14px");
                    div1_3_2_1.style = "top: 315px; line-height: 4.5px;";

                    const span1_3_2_1 = document.createElement("span");
                    span1_3_2_1.classList.add("inter-normal-tundora-14px");
                    span1_3_2_1.innerHTML = item.typeCable;
                    div1_3_2_1.appendChild(span1_3_2_1);

                    div1_3_2.appendChild(img1_3_2_1);
                    div1_3_2.appendChild(div1_3_2_1);

                    div1_3.appendChild(div1_3_1);
                    div1_3.appendChild(p1_3_1);
                    div1_3.appendChild(p1_3_2);
                    div1_3.appendChild(p1_3_3);
                    div1_3.appendChild(div1_3_2);

                    div1_1.appendChild(div1_3);

                    div1.appendChild(div1_1);
                }

                const br1_1 = document.createElement("br");
                const br1_2 = document.createElement("br");

                div0.appendChild(div1);
                div0.append(br1_1);
                div0.append(br1_2);
              
            }
           // div0.removeChild(br1_1);
           // div0.removeChild(br1_2);
           
        })

        .catch(function (err) {
            // If an error occured, you will catch it here
            console.log(err)
        });

}
showData('clavier-souris.json', "div0");