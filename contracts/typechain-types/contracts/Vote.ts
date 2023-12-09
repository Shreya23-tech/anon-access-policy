/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface VoteInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "anonAadhaarVerifierAddr"
      | "checkVoted"
      | "getProposal"
      | "getProposalCount"
      | "getTotalVotes"
      | "hasVoted"
      | "proposals"
      | "verify"
      | "voteForProposal"
      | "votingQuestion"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Voted"): EventFragment;

  encodeFunctionData(
    functionFragment: "anonAadhaarVerifierAddr",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkVoted",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalVotes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasVoted",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [
      [BigNumberish, BigNumberish],
      [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      [BigNumberish, BigNumberish],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "voteForProposal",
    values: [
      BigNumberish,
      [BigNumberish, BigNumberish],
      [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      [BigNumberish, BigNumberish],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "votingQuestion",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "anonAadhaarVerifierAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "checkVoted", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasVoted", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "voteForProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingQuestion",
    data: BytesLike
  ): Result;
}

export namespace VotedEvent {
  export type InputTuple = [
    _from: AddressLike,
    _propositionIndex: BigNumberish
  ];
  export type OutputTuple = [_from: string, _propositionIndex: bigint];
  export interface OutputObject {
    _from: string;
    _propositionIndex: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Vote extends BaseContract {
  connect(runner?: ContractRunner | null): Vote;
  waitForDeployment(): Promise<this>;

  interface: VoteInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  anonAadhaarVerifierAddr: TypedContractMethod<[], [string], "view">;

  checkVoted: TypedContractMethod<
    [_nullifier: BigNumberish],
    [boolean],
    "view"
  >;

  getProposal: TypedContractMethod<
    [proposalIndex: BigNumberish],
    [[string, bigint]],
    "view"
  >;

  getProposalCount: TypedContractMethod<[], [bigint], "view">;

  getTotalVotes: TypedContractMethod<[], [bigint], "view">;

  hasVoted: TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;

  proposals: TypedContractMethod<
    [arg0: BigNumberish],
    [[string, bigint] & { description: string; voteCount: bigint }],
    "view"
  >;

  verify: TypedContractMethod<
    [
      _pA: [BigNumberish, BigNumberish],
      _pB: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      _pC: [BigNumberish, BigNumberish],
      _pubSignals: BigNumberish[]
    ],
    [boolean],
    "view"
  >;

  voteForProposal: TypedContractMethod<
    [
      proposalIndex: BigNumberish,
      _pA: [BigNumberish, BigNumberish],
      _pB: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      _pC: [BigNumberish, BigNumberish],
      _pubSignals: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;

  votingQuestion: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "anonAadhaarVerifierAddr"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "checkVoted"
  ): TypedContractMethod<[_nullifier: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "getProposal"
  ): TypedContractMethod<
    [proposalIndex: BigNumberish],
    [[string, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getProposalCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTotalVotes"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "hasVoted"
  ): TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "proposals"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[string, bigint] & { description: string; voteCount: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "verify"
  ): TypedContractMethod<
    [
      _pA: [BigNumberish, BigNumberish],
      _pB: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      _pC: [BigNumberish, BigNumberish],
      _pubSignals: BigNumberish[]
    ],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "voteForProposal"
  ): TypedContractMethod<
    [
      proposalIndex: BigNumberish,
      _pA: [BigNumberish, BigNumberish],
      _pB: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      _pC: [BigNumberish, BigNumberish],
      _pubSignals: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "votingQuestion"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Voted"
  ): TypedContractEvent<
    VotedEvent.InputTuple,
    VotedEvent.OutputTuple,
    VotedEvent.OutputObject
  >;

  filters: {
    "Voted(address,uint256)": TypedContractEvent<
      VotedEvent.InputTuple,
      VotedEvent.OutputTuple,
      VotedEvent.OutputObject
    >;
    Voted: TypedContractEvent<
      VotedEvent.InputTuple,
      VotedEvent.OutputTuple,
      VotedEvent.OutputObject
    >;
  };
}