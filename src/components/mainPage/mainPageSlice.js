import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import useHttp from "../../hook/http.hook";

const mainPageAdapter = createEntityAdapter({
  selectId: (mainPage) => mainPage.patchVersion,
});

const initialState = mainPageAdapter.getInitialState({
  mainPageLoadingStatus: "waiting",
});

export const fetchMainPage = createAsyncThunk("mainPage/fetchMainPage", () => {
  const request = useHttp();
  return request("https://fortniteapi.io/v1/maps/list");
});

const mainPageSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMainPage.pending, (state) => {
        state.mainPageLoadingStatus = "loading";
      })
      .addCase(fetchMainPage.fulfilled, (state, action) => {
        state.mainPageLoadingStatus = "idle";

        let mainPageData;
        action.payload
          ? (mainPageData = action.payload.maps[action.payload.maps.length - 1])
          : (mainPageData = []);

        mainPageAdapter.addOne(state, mainPageData);
      })
      .addCase(fetchMainPage.rejected, (state) => {
        state.mainPageLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { reducer } = mainPageSlice;

export { reducer };

export const { selectAll } = mainPageAdapter.getSelectors(
  (state) => state.mainPage,
);
