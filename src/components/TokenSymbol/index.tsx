import React from "react";
import { Image } from "@chakra-ui/react";
import ethereumPNG from "../../assets/ethereum.png";
import ethereumSVG from "../../assets/ethereum.svg";
import lottoPNG from "../../assets/lotto.png";

const logosBySymbol: { [title: string]: string } = {
  //Real tokens
  //=====================
  ETH: ethereumPNG,
  ETHSVG: ethereumSVG,
  LOTTO: lottoPNG,
};

type LogoProps = {
  symbol: string;
  size?: string;
  width?: string;
};

const TokenSymbol: React.FC<LogoProps> = ({
  symbol,
  size = "10rem",
  width = undefined,
}) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
    return (
      <Image src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={width? width:size} height={size}/>
    );
};

export default TokenSymbol;