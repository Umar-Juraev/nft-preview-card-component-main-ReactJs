import React from "react";
import { EthereumIcom, ClockIcon, ViewIcon } from "../../assets/svg";
import { BoxShadow, Card as StyledCard } from "./StyledCard";
import image from "../../assets/img/image-avatar.png";
import { Flex } from "../../assets/style/variables";

function Card() {
  return (
    <BoxShadow size="30px" color="#0c182a">
      <BoxShadow color="#0C1729">
        <StyledCard>
          <div className="card__img">
            <div className="card__visible">
              <div className="card__visible-icon">
                <ViewIcon />
              </div>
            </div>
          </div>
          <div className="card__text-cont">
            <h3>Equilibrium #3429</h3>
            <p> Our Equilibrium collection promotes balance and calm</p>
          </div>
          <Flex className="card__info-row">
            <Flex>
              <EthereumIcom />
              <span className="card__info-box-left">0.041 eth</span>
            </Flex>
            <Flex>
              <ClockIcon />
              <span className="card__info-box-right">3 days left</span>
            </Flex>
          </Flex>
          <div className="card__footer">
            <Flex gap="15px" justify="flex-start">
              <div className="avatar">
                <img src={image} alt="avatar" />
              </div>
              <p>
                Creating of <span>Jules Wyvern</span>
              </p>
            </Flex>
          </div>
        </StyledCard>
      </BoxShadow>
    </BoxShadow>
  );
}

export default Card;
