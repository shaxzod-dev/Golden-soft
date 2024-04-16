// import { createContext, useEffect, useReducer } from "react";
// import { useReduce } from "@/reduce/store";
// import {
//   ADD_ONE,
//   ADD_TO_CARD,
//   ADD_TO_LIKE,
//   REMOVE_FROM_CARD,
//   REMOVE_FROM_LIKE,
//   REMOVE_ONE,
// } from "@/reduce/type";

// export const MainContext: any = createContext(null);

// export function MainContextContainer({ children }: { children: any }) {
//   const startState = {
//     cardItems: JSON.parse(localStorage.getItem("cardItems")) || [],
//     likeItems: JSON.parse(localStorage.getItem("likeItems")) || [],
//   };

//   const [state, dispatch] = useReducer(useReduce, startState);
//   const addToCard = (data: any) =>
//     dispatch({ type: ADD_TO_CARD, payload: data });
//   const addOne = (id: any) => dispatch({ type: ADD_ONE, payload: id });
//   const removeOne = (id: any) => dispatch({ type: REMOVE_ONE, payload: id });
//   const removeFromCard = (id: any) =>
//     dispatch({ type: REMOVE_FROM_CARD, payload: id });
//   const addToLike = (data: any) =>
//     dispatch({ type: ADD_TO_LIKE, payload: data });
//   const removeFromLike = (id: any) =>
//     dispatch({ type: REMOVE_FROM_LIKE, payload: id });
//   useEffect(() => {
//     localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
//   }, [state.cardItems]);
//   useEffect(() => {
//     localStorage.setItem("likeItems", JSON.stringify(state.likeItems));
//   }, [state.likeItems]);
//   return (
//     <MainContext.Provider
//       value={{
//         addToLike,
//         removeFromLike,
//         addToCard,
//         removeFromCard,
//         addOne,
//         removeOne,
//         likeItems: state.likeItems,
//         cardItems: state.cardItems,
//       }}
//     >
//       {children}
//     </MainContext.Provider>
//   );
// }
