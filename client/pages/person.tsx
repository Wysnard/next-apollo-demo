import _ from "lodash";
import React, { useState } from "react";
import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import { useGetPeopleQuery } from "../generated/graphql";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import PersonCard from "../components/molecules/personCard.component";
import LoadMoreIcon from "../components/atoms/loadMoreIcon.component";
import Spinner from "../components/atoms/spinner.component";

const GET_PEOPLE_QUERY_QUERY_DEFAULT_VARIABLES = {
  offset: 0,
  limit: 20,
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

const PersonPage: NextPage = ({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) => {
  const [searchText, setSearchText] = useState("");
  const [names, setNames] = useState<string[]>([]);
  const { data, loading, error, fetchMore, refetch } = useGetPeopleQuery({
    notifyOnNetworkStatusChange: true,
    variables: {
      ...GET_PEOPLE_QUERY_QUERY_DEFAULT_VARIABLES,
      searchText: "",
    },
    onCompleted: (data) => {
      return setNames(data.getPeople.map((person) => person.name));
    },
  });

  if (error) return null;

  return (
    <div className="divide-solid divide-y-4 divide-black">
      <div id="page-title" className="flex justify-center">
        <h1 className="font-bold text-3xl py-4">Phone Book</h1>
      </div>
      <div id="page-content">
        <div id="searchBar" className="py-4">
          {process.browser && (
            <Autocomplete
              id="searchTextBoxAC"
              value={searchText}
              onChange={(event, newValue) => {
                setSearchText(newValue ? newValue : "");
                refetch({
                  ...GET_PEOPLE_QUERY_QUERY_DEFAULT_VARIABLES,
                  searchText: newValue ? newValue : "",
                });
              }}
              inputValue={searchText}
              onInputChange={(event, newInputValue) => {
                setSearchText(newInputValue);
                refetch({
                  ...GET_PEOPLE_QUERY_QUERY_DEFAULT_VARIABLES,
                  searchText: newInputValue,
                });
              }}
              options={names}
              renderInput={(params) => (
                <TextField
                  {...params}
                  id="searchTextBox"
                  label="Search for a name..."
                  variant="outlined"
                />
              )}
            />
          )}
        </div>
        <div>
          {data ? (
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 2xl:grid-cols-4">
              {data.getPeople.map((person, index) => (
                <PersonCard key={index} {...person}></PersonCard>
              ))}
            </div>
          ) : (
            <div className="py-20">
              <Spinner />
            </div>
          )}
          {!loading && (
            <div>
              {
                <div className="flex justify-center">
                  <LoadMoreIcon
                    onClick={() =>
                      fetchMore({
                        variables: {
                          searchText: searchText,
                          offset: data?.getPeople.length,
                        },
                      })
                    }
                  />
                </div>
              }
              <div className="text-center">Load More </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonPage;
