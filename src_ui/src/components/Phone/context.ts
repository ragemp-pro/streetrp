import React from 'react';

export interface PhoneContext {
	openApp: (name?: string) => void;
}

const PhoneContext = React.createContext<PhoneContext | null>(null);
export default PhoneContext;
