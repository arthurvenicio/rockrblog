import React from "react";

import img from "../../assets/img1.jpeg";
import { ContactModal } from "../../components/ContactModal";
import { Header } from "../../components/Header";
import * as S from "./style";

export const Post = (): JSX.Element => {
  return (
    <>
      <ContactModal />
      <S.Wraper>
        <Header />
        <S.Container>
          <S.Box>
            <S.SubBox>
              <S.Image src={img} alt="People in the party" />
              <S.Info>
                <p className="date">Jan 6,2018</p>
                <p className="author">Kelsi Monahan</p>
                <p className="title">Aperiam ut sed consequatur sed.</p>
              </S.Info>
            </S.SubBox>
            <S.Article>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eleifend ligula in nulla vulputate pharetra. Proin condimentum,
                libero quis feugiat pharetra, ante arcu faucibus felis, vel
                elementum magna felis in libero. Aliquam id ultricies purus.
                Etiam at ullamcorper enim. Cras vel elit ac lorem condimentum
                dignissim. Ut rhoncus neque finibus erat congue, id tempus lacus
                hendrerit. Curabitur non faucibus diam. Sed id ante id dolor
                euismod varius eu vel velit. Maecenas id ligula quis enim
                blandit gravida a et lorem. Vivamus eu turpis eu leo malesuada
                dictum non ac tortor. Pellentesque volutpat mollis leo tincidunt
                sollicitudin. Suspendisse porta imperdiet sapien nec euismod.
                Quisque ac dictum sem. Cras in porttitor lacus, vitae convallis
                elit. Maecenas in fermentum erat, a rutrum nulla. Mauris quis
                dolor sit amet metus mollis tempor eu quis turpis. Vestibulum
                vel eleifend magna, eget tempor nulla. Donec bibendum mauris
                aliquam elit vulputate, id vestibulum lorem sodales. Nullam eget
                erat mauris. Etiam sit amet sollicitudin magna. Ut tortor nisi,
                mollis viverra tempus consequat, interdum non mi. Quisque
                bibendum, lacus sit amet rhoncus malesuada.
              </p>
              \n
            </S.Article>
          </S.Box>
        </S.Container>
      </S.Wraper>
    </>
  );
};
