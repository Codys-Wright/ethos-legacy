"use client";

import { createContext, useContext } from 'react';
import { ThemeConfig, defaultTheme } from '@/lib/themes';

export const ThemeContext = createContext<ThemeConfig>(defaultTheme);

export const useTheme = () => useContext(ThemeContext);