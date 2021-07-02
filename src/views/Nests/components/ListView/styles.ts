import styled from 'styled-components';
import { darken } from 'polished';

export const ListLabelCol = styled.span`
	font-family: 'Kaushan Script', sans-serif;
	display: inline-block;
	text-align: center;
	color: #5b3926;
	vertical-align: middle;
	font-weight: bold;
  padding: 0;
  width: ${(props: ColProps) => props.width};
`;

export const ListLabelContainer = styled.div`
  padding: 25px;
`;

export const ListItemContainer = styled.div`
	background: #f0e9e7;
	padding: 25px;
	display: block;
	border: 1px solid ${darken(0.1, '#f0e9e7')}; 
	border-radius: 5px;
	margin-bottom: 10px;
`;

export const AssetImage = styled.img`
	height: 48px;
	vertical-align: middle;
	align-items: center;
`;

export const ColumnText = styled.span`
	color: #805e49;
	vertical-align: middle;
	font-weight: bold;
`;

// List Item

export const NestListContainer = styled.div`
	width: 80%;
`;

export const ListCol = styled.div`
	display: inline-block;
  width: ${(props: ColProps) => props.width};
  text-align: center;
`;

// Props and stuff

interface ColProps {
  width: string
}
