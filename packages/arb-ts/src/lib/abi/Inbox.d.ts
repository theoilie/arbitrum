/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface InboxInterface extends ethers.utils.Interface {
  functions: {
    'bridge()': FunctionFragment
    'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)': FunctionFragment
    'depositEth(uint256)': FunctionFragment
    'initialize(address,address)': FunctionFragment
    'isMaster()': FunctionFragment
    'sendContractTransaction(uint256,uint256,address,uint256,bytes)': FunctionFragment
    'sendL1FundedContractTransaction(uint256,uint256,address,bytes)': FunctionFragment
    'sendL1FundedUnsignedTransaction(uint256,uint256,uint256,address,bytes)': FunctionFragment
    'sendL2Message(bytes)': FunctionFragment
    'sendL2MessageFromOrigin(bytes)': FunctionFragment
    'sendUnsignedTransaction(uint256,uint256,uint256,address,uint256,bytes)': FunctionFragment
    'updateWhitelistSource(address)': FunctionFragment
    'whitelist()': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'bridge', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'createRetryableTicket',
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'depositEth',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [string, string]
  ): string
  encodeFunctionData(functionFragment: 'isMaster', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'sendContractTransaction',
    values: [BigNumberish, BigNumberish, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'sendL1FundedContractTransaction',
    values: [BigNumberish, BigNumberish, string, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'sendL1FundedUnsignedTransaction',
    values: [BigNumberish, BigNumberish, BigNumberish, string, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'sendL2Message',
    values: [BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'sendL2MessageFromOrigin',
    values: [BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'sendUnsignedTransaction',
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      BytesLike
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'updateWhitelistSource',
    values: [string]
  ): string
  encodeFunctionData(functionFragment: 'whitelist', values?: undefined): string

  decodeFunctionResult(functionFragment: 'bridge', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'createRetryableTicket',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'depositEth', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isMaster', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'sendContractTransaction',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'sendL1FundedContractTransaction',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'sendL1FundedUnsignedTransaction',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'sendL2Message',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'sendL2MessageFromOrigin',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'sendUnsignedTransaction',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'updateWhitelistSource',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'whitelist', data: BytesLike): Result

  events: {
    'InboxMessageDelivered(uint256,bytes)': EventFragment
    'InboxMessageDeliveredFromOrigin(uint256)': EventFragment
    'WhitelistSourceUpdated(address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'InboxMessageDelivered'): EventFragment
  getEvent(
    nameOrSignatureOrTopic: 'InboxMessageDeliveredFromOrigin'
  ): EventFragment
  getEvent(nameOrSignatureOrTopic: 'WhitelistSourceUpdated'): EventFragment
}

export class Inbox extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: InboxInterface

  functions: {
    bridge(overrides?: CallOverrides): Promise<[string]>

    createRetryableTicket(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    depositEth(
      maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    initialize(
      _bridge: string,
      _whitelist: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    isMaster(overrides?: CallOverrides): Promise<[boolean]>

    sendContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    sendL1FundedContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    sendL1FundedUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    sendL2Message(
      messageData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    sendL2MessageFromOrigin(
      messageData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    sendUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    updateWhitelistSource(
      newSource: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    whitelist(overrides?: CallOverrides): Promise<[string]>
  }

  bridge(overrides?: CallOverrides): Promise<string>

  createRetryableTicket(
    destAddr: string,
    l2CallValue: BigNumberish,
    maxSubmissionCost: BigNumberish,
    excessFeeRefundAddress: string,
    callValueRefundAddress: string,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  depositEth(
    maxSubmissionCost: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  initialize(
    _bridge: string,
    _whitelist: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  isMaster(overrides?: CallOverrides): Promise<boolean>

  sendContractTransaction(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    destAddr: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  sendL1FundedContractTransaction(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    destAddr: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  sendL1FundedUnsignedTransaction(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    nonce: BigNumberish,
    destAddr: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  sendL2Message(
    messageData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  sendL2MessageFromOrigin(
    messageData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  sendUnsignedTransaction(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    nonce: BigNumberish,
    destAddr: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  updateWhitelistSource(
    newSource: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  whitelist(overrides?: CallOverrides): Promise<string>

  callStatic: {
    bridge(overrides?: CallOverrides): Promise<string>

    createRetryableTicket(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    depositEth(
      maxSubmissionCost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    initialize(
      _bridge: string,
      _whitelist: string,
      overrides?: CallOverrides
    ): Promise<void>

    isMaster(overrides?: CallOverrides): Promise<boolean>

    sendContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    sendL1FundedContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    sendL1FundedUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    sendL2Message(
      messageData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    sendL2MessageFromOrigin(
      messageData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    sendUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    updateWhitelistSource(
      newSource: string,
      overrides?: CallOverrides
    ): Promise<void>

    whitelist(overrides?: CallOverrides): Promise<string>
  }

  filters: {
    InboxMessageDelivered(
      messageNum?: BigNumberish | null,
      data?: null
    ): TypedEventFilter<
      [BigNumber, string],
      { messageNum: BigNumber; data: string }
    >

    InboxMessageDeliveredFromOrigin(
      messageNum?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { messageNum: BigNumber }>

    WhitelistSourceUpdated(
      newSource?: null
    ): TypedEventFilter<[string], { newSource: string }>
  }

  estimateGas: {
    bridge(overrides?: CallOverrides): Promise<BigNumber>

    createRetryableTicket(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    depositEth(
      maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    initialize(
      _bridge: string,
      _whitelist: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    isMaster(overrides?: CallOverrides): Promise<BigNumber>

    sendContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    sendL1FundedContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    sendL1FundedUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    sendL2Message(
      messageData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    sendL2MessageFromOrigin(
      messageData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    sendUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    updateWhitelistSource(
      newSource: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    whitelist(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>

    createRetryableTicket(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    depositEth(
      maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    initialize(
      _bridge: string,
      _whitelist: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    isMaster(overrides?: CallOverrides): Promise<PopulatedTransaction>

    sendContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    sendL1FundedContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    sendL1FundedUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    sendL2Message(
      messageData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    sendL2MessageFromOrigin(
      messageData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    sendUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    updateWhitelistSource(
      newSource: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    whitelist(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
