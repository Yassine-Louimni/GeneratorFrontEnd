import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;

// Styled components
const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PricingCard = styled.div`
  position: relative;
  width: 300px;
  margin: 0 1rem;
  padding: 2rem;
  border-radius: 15px;
  background: white;
  box-shadow: 0 10px 30px rgba(2, 7, 51, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
  overflow: hidden;
  z-index: 1;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(2, 7, 51, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: ${props => props.gradient};
    z-index: 2;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
    width: 100%;
    max-width: 350px;
  }
`;

const PopularTag = styled.div`
  position: absolute;
  top: -10px;
  right: 20px;
  background: #ff4757;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(255, 71, 87, 0.3);
  z-index: 3;
  animation: ${pulse} 2s infinite;
`;

const Title = styled.h2`
  color: #020733;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Price = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #020733;
  margin: 1.5rem 0;
  position: relative;
  display: inline-block;

  &::before {
    content: '$';
    font-size: 1.5rem;
    position: absolute;
    left: -1rem;
    top: 0.5rem;
  }

  span {
    font-size: 1rem;
    font-weight: normal;
    color: #6c757d;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  text-align: left;
`;

const FeatureItem = styled.li`
  padding: 0.5rem 0;
  color: #495057;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '✓';
    color: #4cd137;
    position: absolute;
    left: 0;
    font-weight: bold;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 50px;
  background: ${props => props.gradient};
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(2, 7, 51, 0.3);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #020733, #0a1a5a);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const PricingCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const plans = [
    {
      id: 1,
      title: 'Basic',
      price: '19',
      period: '/month',
      features: [
        '10 Projects',
        '5GB Storage',
        'Basic Support',
        'Email Assistance'
      ],
      gradient: 'linear-gradient(to right, #020733, #1a237e)',
      buttonGradient: 'linear-gradient(to right, #020733, #1a237e)'
    },
    {
      id: 2,
      title: 'Professional',
      price: '49',
      period: '/month',
      features: [
        'Unlimited Projects',
        '50GB Storage',
        'Priority Support',
        '24/7 Chat Assistance',
        'Advanced Analytics'
      ],
      gradient: 'linear-gradient(to right, #020733, #283593)',
      buttonGradient: 'linear-gradient(to right, #020733, #283593)',
      popular: true
    },
    {
      id: 3,
      title: 'Enterprise',
      price: '99',
      period: '/month',
      features: [
        'Unlimited Projects',
        '500GB Storage',
        'VIP Support',
        'Dedicated Account Manager',
        'Advanced Analytics',
        'API Access'
      ],
      gradient: 'linear-gradient(to right, #020733, #3949ab)',
      buttonGradient: 'linear-gradient(to right, #020733, #3949ab)'
    }
  ];

  return (
    <PricingContainer>
      {plans.map((plan, index) => (
        <PricingCard 
          key={plan.id} 
          gradient={plan.gradient}
          delay={`${index * 0.1}s`}
          onMouseEnter={() => setHoveredCard(plan.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {plan.popular && <PopularTag>POPULAR</PopularTag>}
          <Title>{plan.title}</Title>
          <Price>
            {plan.price}<span>{plan.period}</span>
          </Price>
          <FeaturesList>
            {plan.features.map((feature, i) => (
              <FeatureItem key={i}>{feature}</FeatureItem>
            ))}
          </FeaturesList>
          <Button gradient={plan.buttonGradient}>
            Get Started
          </Button>
        </PricingCard>
      ))}
    </PricingContainer>
  );
};

export default PricingCards;