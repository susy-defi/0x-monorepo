// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace class-name
// tslint:disable:no-unused-variable
// tslint:disable:no-unbound-method
import { BaseContract } from '@0x/base-contract';
import { BlockParam, BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, MethodAbi, TxData, TxDataPayable, SupportedProvider } from 'ethereum-types';
import { BigNumber, classUtils, logUtils, providerUtils } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { isUndefined } from 'lodash';
// tslint:enable:no-unused-variable


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class CoordinatorContract extends BaseContract {
    public getSignerAddress = {
        functionSignature: 'getSignerAddress(bytes32,bytes)',
        async callAsync(
            hash: string,
            signature: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as CoordinatorContract;
            const encodedData = self._strictEncodeArguments(self.getSignerAddress.functionSignature, [hash,
        signature
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder(self.getSignerAddress.functionSignature);
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public executeTransaction = {
        async sendTransactionAsync(
            transaction: {salt: BigNumber;signerAddress: string;data: string},
            txOrigin: string,
            transactionSignature: string,
            approvalExpirationTimeSeconds: BigNumber[],
            approvalSignatures: string[],
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as CoordinatorContract;
            const encodedData = self._strictEncodeArguments(self.executeTransaction.functionSignature, [transaction,
    txOrigin,
    transactionSignature,
    approvalExpirationTimeSeconds,
    approvalSignatures
    ]);
            const gasEstimateFunction = self.executeTransaction.estimateGasAsync.bind(self, transaction,
    txOrigin,
    transactionSignature,
    approvalExpirationTimeSeconds,
    approvalSignatures
    );
            const txHash = await self._sendTransactionAsync(self.address, encodedData, txData, gasEstimateFunction);
            return txHash;
        },
        async estimateGasAsync(
            transaction: {salt: BigNumber;signerAddress: string;data: string},
            txOrigin: string,
            transactionSignature: string,
            approvalExpirationTimeSeconds: BigNumber[],
            approvalSignatures: string[],
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as CoordinatorContract;
            const encodedData = self._strictEncodeArguments(self.executeTransaction.functionSignature, [transaction,
    txOrigin,
    transactionSignature,
    approvalExpirationTimeSeconds,
    approvalSignatures
    ]);
            const gas = await self._estimateGasAsync(self.address, encodedData, txData);
            return gas;
        },
        getABIEncodedTransactionData(
            transaction: {salt: BigNumber;signerAddress: string;data: string},
            txOrigin: string,
            transactionSignature: string,
            approvalExpirationTimeSeconds: BigNumber[],
            approvalSignatures: string[],
        ): string {
            const self = this as any as CoordinatorContract;
            const abiEncodedTransactionData = self._strictEncodeArguments(self.executeTransaction.functionSignature, [transaction,
    txOrigin,
    transactionSignature,
    approvalExpirationTimeSeconds,
    approvalSignatures
    ]);
            return abiEncodedTransactionData;
        },
        functionSignature: 'executeTransaction((uint256,address,bytes),address,bytes,uint256[],bytes[])',
        async callAsync(
            transaction: {salt: BigNumber;signerAddress: string;data: string},
            txOrigin: string,
            transactionSignature: string,
            approvalExpirationTimeSeconds: BigNumber[],
            approvalSignatures: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as CoordinatorContract;
            const encodedData = self._strictEncodeArguments(self.executeTransaction.functionSignature, [transaction,
        txOrigin,
        transactionSignature,
        approvalExpirationTimeSeconds,
        approvalSignatures
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder(self.executeTransaction.functionSignature);
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public assertValidCoordinatorApprovals = {
        functionSignature: 'assertValidCoordinatorApprovals((uint256,address,bytes),address,bytes,uint256[],bytes[])',
        async callAsync(
            transaction: {salt: BigNumber;signerAddress: string;data: string},
            txOrigin: string,
            transactionSignature: string,
            approvalExpirationTimeSeconds: BigNumber[],
            approvalSignatures: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as CoordinatorContract;
            const encodedData = self._strictEncodeArguments(self.assertValidCoordinatorApprovals.functionSignature, [transaction,
        txOrigin,
        transactionSignature,
        approvalExpirationTimeSeconds,
        approvalSignatures
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder(self.assertValidCoordinatorApprovals.functionSignature);
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public EIP712_DOMAIN_HASH = {
        functionSignature: 'EIP712_DOMAIN_HASH()',
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as CoordinatorContract;
            const encodedData = self._strictEncodeArguments(self.EIP712_DOMAIN_HASH.functionSignature, []);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder(self.EIP712_DOMAIN_HASH.functionSignature);
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public assertValidTransactionOrdersApproval = {
        functionSignature: 'assertValidTransactionOrdersApproval((uint256,address,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],address,bytes,uint256[],bytes[])',
        async callAsync(
            transaction: {salt: BigNumber;signerAddress: string;data: string},
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            txOrigin: string,
            transactionSignature: string,
            approvalExpirationTimeSeconds: BigNumber[],
            approvalSignatures: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as CoordinatorContract;
            const encodedData = self._strictEncodeArguments(self.assertValidTransactionOrdersApproval.functionSignature, [transaction,
        orders,
        txOrigin,
        transactionSignature,
        approvalExpirationTimeSeconds,
        approvalSignatures
        ]);
            const rawCallResult = await self._callAsync(self.address, encodedData, callData, defaultBlock);
            const abiEncoder = self._lookupAbiEncoder(self.assertValidTransactionOrdersApproval.functionSignature);
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            _exchange: string,
    ): Promise<CoordinatorContract> {
        if (isUndefined(artifact.compilerOutput)) {
            throw new Error('Compiler output not found in the artifact file');
        }
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const bytecode = artifact.compilerOutput.evm.bytecode.object;
        const abi = artifact.compilerOutput.abi;
        return CoordinatorContract.deployAsync(bytecode, abi, provider, txDefaults, _exchange
);
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            _exchange: string,
    ): Promise<CoordinatorContract> {
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_exchange
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_exchange
],
            BaseContract._bigNumberToString,
        );
        return {} as any;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('Coordinator', abi, address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method
