import React from "react";
import * as S from "./mainStyle.jsx";
import Dive from "../assets/dive.png"
import Virtual from "../assets/virtual.png"
import Arrow from "../assets/arrow.png"
import Lorem from "../assets/lorem.png"
import Pexels from "../assets/pexels.png"
import Button from "../Button/button.jsx"
import Location from "../Location/location.jsx"
import Seta from "../assets/seta.png"
import Mask from "../assets/mask.png"
import Card from "../Card/card.jsx"
import Simulation from "../assets/simulation.png"


function Main() {
    return (
        <S.Main>
            <S.Div>
                <S.Div2>
                    <S.Img src={Dive} alt="parágrafo de titulo" />
                    <S.Img src={Virtual} alt="parágrafo de titulo" />
                    <S.Img src={Lorem} alt="parágrafo de texto" />
                </S.Div2>
                <S.Div3>
                    <Button text="BUILD YOUR WORLD" />
                    <img src={Arrow} alt="seta para a direita" />
                </S.Div3>
                <div>
                    <S.Img3 src={Pexels} alt="mulher com oculos" />
                </div>
            </S.Div>
            <S.Location>
                <Location />
            </S.Location>
            <S.Introduction>
                <div>
                    <h2>INTRODUCTION</h2>
                    <S.H5>TO HYDRA VR</S.H5>
                    <S.Img4 src={Seta} alt="seta para a direita" />
                </div>
                <p> Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat  <br />
                    nibh sed pulvina proin gravida hendrerit lectus. Mi sit amet mauris commodo <br />
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare <br />
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae. <br />
                </p>
            </S.Introduction>
            <S.About>
                <S.Img5 src={Mask} alt="Rapaz com óculos" />
                <S.Div4>
                    <h2>ABOUT</h2> <br />
                    <S.H5>HYDRA VR</S.H5> <br />
                    <p>
                        Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus <br />
                        urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida <br />
                        dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. <br />
                        Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet <br />
                        sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam <br />
                        etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet <br />
                        cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha <br />
                        retra diam sit amet nisl suscipit adipiscing bibendum.</p> <br />
                    <Button text="LET'S GET IN TOUCH" />
                </S.Div4>
            </S.About>
            <S.Introduction>
                <div>
                    <h2>WHY BUILD</h2>
                    <S.H5>WITH HYDRA</S.H5>
                    <S.Img4 src={Seta} alt="seta para a direita" />
                </div>
                <p> Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat  <br />
                    nibh sed pulvina proin gravida hendrerit lectus. Mi sit amet mauris commodo <br />
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare <br />
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae. <br />
                </p>
            </S.Introduction>
            <Card image={Simulation}
                title="SIMULATION"
                text="Vitae sapien pellentesque
                      habitant morbi nunc."/>
        </S.Main>
    )
}

export default Main