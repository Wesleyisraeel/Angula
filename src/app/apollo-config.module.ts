import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { onError } from 'apollo-link-error';

import {Apollo, ApolloModule} from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
 })
export class ApolloConfigModule {

  constructor(
    private apollo: Apollo,
    private httpLink: HttpLink
  ) {

    const uri = 'https://api.graph.cool/simple/v1/cjkwmni9zew3c0110m09wo1cc';
    const http = httpLink.create({ uri });


    const linkError = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      }
      if (networkError)  { console.log(`[Network error]: ${networkError}`); }
    });

    apollo.create({

      link: ApolloLink.from([
        linkError,
        http
      ]),
      cache: new InMemoryCache(),
      connectToDevTools: !environment.production
    });

  }

}
