import { Icon } from '@iconify/react';
import styled from 'styled-components';
import "../../styles/styles"

const IconWithText = ({ icon, text, iconSize = 24, textSize = '16px', color = 'var(--dark)' }) => {
  return (
    <Container>
      <Icon icon={icon} width={iconSize} height={iconSize} style={{ color }} />
      <Text style={{ fontSize: textSize, color }}>{text}</Text>
    </Container>
  );
};

export default IconWithText;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
`;

const Text = styled.p`
  margin-left: var(--space8);
  margin-top: 2px;
`;