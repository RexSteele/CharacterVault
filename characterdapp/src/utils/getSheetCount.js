import store from "../redux/store";

export const SHEET_COUNT = "SHEET_COUNT"; // action type

// action creator (dispatch sends this to redux reducer)
function sheetCount(data) {
  return {
    type: SHEET_COUNT,
    payload: data
  };
}

//
//  set up the blockchain shadow contract, user address, and user sheet count.  Put into redux store.
//

async function getSheetCount(CV, userAddress) {
  // get number of sheets owned by the user account
  let userSheetCount = +(await CV.balanceOf(userAddress));  // + convert a string to an integer

  // do a binary search to estimate total sheet count.
  // It is a real shame that the Cryptosheets contract doesn't totally comply with ERC720 to include a function
  // that returns totalSheetount.

  var high = 8192;
  var low = 0;
  var middle = 4096;

  while (low < high) {
      try {
      await CV.sheets(middle);
      low = middle + 1;
      middle = Math.floor(low + (high - low) / 2);
    } catch {
      high = middle - 1;
      middle = Math.floor(low + (high - low) / 2);
    }
  }

  // put state data into the REDUX store for easy access from other pages and components

  let data = {
    totalSheetCount: Math.max(low-1, 1),   // from binary search
    userSheetCount          //EC7 shorthand for totalSheetCount:totalSheetCount because of same variable name
  };

  store.dispatch(sheetCount(data));
}

export default getSheetCount;
