import React from 'react';
import './Splash.scss';
// animations
import { fadeIn, slideInLeft, slideInRight, bounceInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInSpan = styled.div`animation: 2s ${fadeInAnimation};`;

const slideInLeftAnimation = keyframes`${slideInLeft}`;
const SlideInLeftSpan = styled.div`animation: 2s ${slideInLeftAnimation};`;

const slideInRightAnimation = keyframes`${slideInRight}`;
const SlideInRightSpan = styled.div`animation: 2s ${slideInRightAnimation};`;

const bounceInDownAnimation = keyframes`${bounceInDown}`;
const BounceInDownSpan = styled.div`animation: 4s ${bounceInDownAnimation};`;

const Splash = () => (
	<div className="splash-wrapper">
		<div>
			<br />

			<SlideInRightSpan>
				<span className="splash">Xin chào!</span>
			</SlideInRightSpan>

			<SlideInLeftSpan>
				<span className="splash">Welcome!</span>
			</SlideInLeftSpan>

			<SlideInRightSpan>
				<span className="splash">Bienvenue !</span>
			</SlideInRightSpan>

			<SlideInLeftSpan>
				<span className="splash">いらっしゃいませ！</span>
			</SlideInLeftSpan>

			<SlideInRightSpan>
				<span className="splash">Wilkommen!</span>
			</SlideInRightSpan>
		</div>
		<BounceInDownSpan className="scroll-down">
			<h1 style={{ color: "#ffffff" }}>view Hoang Anh's portfolio</h1>
			<div>
				<span>⬇️</span>
			</div>
			<div>
				<span>⬇️</span>
			</div>
			<div>
				<span>⬇️</span>
			</div>
		</BounceInDownSpan>
	</div>
);

export default Splash;
