"use client";
import React from "react";
import Image from "next/image";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "./work";

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile page={0}>
        {({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>Some of our work</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://www.instagram.com/nailswithshady">
                  Nail
                </WorkLink>
                &apos;s by Chardene.
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/nails/nail1.jpeg"
                layout="responsive"
                width={840}
                height={1620}
                alt="Pink Panda"
              />
            </WorkRight>
          </WorkContainer>
        )}
      </Tile>
    </TileContent>
    <TileContent>
      <Tile page={1}>
        {({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>Some of our work</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://www.instagram.com/nailswithshady">
                  Nail
                </WorkLink>
                &apos;s by Chardene.
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/nails/nail2.jpeg"
                layout="responsive"
                width={840}
                height={1620}
                alt="SteakHOuse"
              />
            </WorkRight>
          </WorkContainer>
        )}
      </Tile>
    </TileContent>
    <TileContent>
      <Tile page={2}>
        {({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>Some of our work</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://www.instagram.com/nailswithshady">
                  Chardene
                </WorkLink>
                &apos;s nails.
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/nails/nail3.jpeg"
                layout="responsive"
                width={840}
                height={1620}
                alt="SteakHOuse"
              />
            </WorkRight>
          </WorkContainer>
        )}
      </Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
