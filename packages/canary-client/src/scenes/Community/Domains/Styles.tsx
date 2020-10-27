import React from 'react';
import styled from 'styled-components';
import { Text, Header } from 'bonde-components';
import { ActiveIcon, InactiveIcon } from './Icons';

export type ColProps = {
  align?: string
}

export const Col = styled.div<ColProps>`
  text-align: ${props => props.align};

  p {
    text-align: ${props => props.align};
  }
`;

Col.defaultProps = {
  align: 'left'
}

export type DNSProps = {
  header?: boolean
}

export const DNS = styled.div<DNSProps>`
  display: grid;
  grid-template-columns: 500px auto 150px;
  grid-template-rows: ${props => !!props.header ? '30px' : '80px'};
  background-color: ${props => !!props.header ? 'none' : '#fff'};
  border-bottom: ${props => !!props.header ? 'none' : '1px solid #eee'};  

  ${Col} {
    padding: ${props => !!props.header ? '0 20px' : '30px 20px'};

    ${Header.H5} {
      margin: 14px 0 8px;
    }
  }
`

export type StatusProps = {
  value: string
  labels: Record<string, string>
  activeStatus?: string
}

type StatusStyledProps = {
  active?: boolean
}

export const StatusStyled = styled(Text)`
  color: ${(props: StatusStyledProps) => props.active ? '#50E3C2' : '#444444'};

  svg {
    margin-right: 10px;
  }
`;

export const Status = ({ value, labels, activeStatus }: StatusProps) => {
  const isActive = value === activeStatus;

  return (
    <StatusStyled active={isActive}>
      {isActive ? (
        <>
          <ActiveIcon />
          <span>{labels[value]}</span>
        </>
      ) : (
        <>
          <InactiveIcon />
          <span>{labels[value]}</span>
        </>
      )}
    </StatusStyled>
  );
}

Status.defaultProps = {
  activeStatus: 'active'
}

type ListProps = {
  columnSize?: string
  rowSize?: string
  padding?: string
}

export const List = styled.div<ListProps>`
  padding: 20px 0 30px;

  ${DNS} {
    grid-template-columns: ${props => !props.columnSize ? '500px auto 150px' : props.columnSize};

    ${props => props.rowSize && `
      grid-template-rows: ${props.rowSize};
    `};

    ${props => props.padding && `
      ${Col} {
        padding: ${props.padding};
      }
    `};
  }
`

export const MainTitle = styled(Header.H5)`
  display: flex;
  text-transform: uppercase;
  margin: 0!important;
`;

export const SmallText = styled(Text)`
  font-size: 13px;
  text-align: center;
  margin-bottom: 10px;
`;

export const ActionTitle = styled(Header.H4)`
  text-transform: uppercase;
  cursor: pointer;

  svg {
    margin-right: 10px;
    margin-top: -5px;
  }
`;