import * as _ from 'lodash';
import * as React from 'react';
import * as CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

import { Container } from 'ts/components/ui/container';
import { Text } from 'ts/components/ui/text';
import { colors } from 'ts/style/colors';
import { WebsitePaths } from 'ts/types';

export interface SimpleMenuProps {
    minWidth?: number | string;
}

export const SimpleMenu: React.StatelessComponent<SimpleMenuProps> = ({ children, minWidth }) => {
    return (
        <Container
            marginLeft="16px"
            marginRight="16px"
            marginBottom="16px"
            minWidth={minWidth}
            className="flex flex-column"
        >
            {children}
        </Container>
    );
};

SimpleMenu.defaultProps = {
    minWidth: '220px',
};

export interface SimpleMenuItemProps {
    displayText: string;
    onClick?: () => void;
}
export const SimpleMenuItem: React.StatelessComponent<SimpleMenuItemProps> = ({ displayText, onClick }) => {
    // Falling back to _.noop for onclick retains the hovering effect
    return (
        <Container marginTop="16px" className="flex flex-column">
            <Text
                fontSize="14px"
                fontColor={colors.darkGrey}
                onClick={onClick || _.noop}
                hoverColor={colors.mediumBlue}
            >
                {displayText}
            </Text>
        </Container>
    );
};

export interface CopyAddressSimpleMenuItemProps {
    userAddress: string;
    onClick?: () => void;
}
export const CopyAddressSimpleMenuItem: React.StatelessComponent<CopyAddressSimpleMenuItemProps> = ({
    userAddress,
    onClick,
}) => {
    return (
        <CopyToClipboard text={userAddress}>
            <SimpleMenuItem displayText="Copy Address to Clipboard" onClick={onClick} />
        </CopyToClipboard>
    );
};

export const GoToAccountManagementSimpleMenuItem: React.StatelessComponent<{}> = () => {
    return (
        <Link to={`${WebsitePaths.Portal}/account`} style={{ textDecoration: 'none' }}>
            <SimpleMenuItem displayText="Manage Account..." onClick={_.noop} />
        </Link>
    );
};

export interface DifferentWalletSimpleMenuItemProps {
    onClick?: () => void;
}
export const DifferentWalletSimpleMenuItem: React.StatelessComponent<DifferentWalletSimpleMenuItemProps> = ({
    onClick,
}) => {
    return <SimpleMenuItem displayText="Use a Different Wallet..." onClick={onClick} />;
};
