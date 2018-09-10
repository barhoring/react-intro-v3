// @flow

export type Show = {
    title: string,
     year: string,
     description:string, 
     poster: string, 
     imdbID: string,
     trailer: string 
  };

declare var module : {
    hot: {
        accept(path: string, callback: () => void): void
    }
};

declare type ActionType = 'SET_SEARCH_TERM';

declare type ActionT<A: ActionType,P> = {|
    type: A,
    payload: P
|}

export type Action = ActionT<'SET_SEARCH_TERM', string>;