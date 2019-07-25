import React from "react";
import styled from "styled-components";
import tokens from "../../StyleConfigs";

const Banner = ({ fontSize, children, color }) => {
  let bannerColor = "";

  switch (color) {
    case "primary":
      bannerColor = tokens.colors.jhansi;
      break;
    case "secondary":
      bannerColor = tokens.colors.arad;
      break;
    case "tertiary":
      bannerColor = tokens.colors.transilvania;
      break;
    default:
      bannerColor = "#000000";
  }

  const StyledBanner = styled.h1`
    font-family: "Cinzel Decorative", cursive;
    font-size: ${fontSize}px;
    color: ${bannerColor};
  `;

  return <StyledBanner data-test-id="banner" >{children}</StyledBanner>;
};

export default Banner;
