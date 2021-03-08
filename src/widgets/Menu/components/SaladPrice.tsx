import React from "react";
import styled from "styled-components";
import { SaladRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  saladPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SaladPrice: React.FC<Props> = ({ saladPriceUsd }) => {
  return saladPriceUsd ? (
    <PriceLink href="https://saladswap.info/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" target="_blank">
      <SaladRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${saladPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(SaladPrice);
