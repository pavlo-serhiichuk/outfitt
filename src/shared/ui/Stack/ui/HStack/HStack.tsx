import React from 'react';
import { FC } from 'react'
import { Flex, FlexProps } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack: FC<HStackProps> = (props) => (
  <Flex {...props} direction="row" />
)
