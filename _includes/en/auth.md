<section id="authorization">
  <h2>
    Authentication
  </h2>
  <br />
  <h3>
    Authentication Model
  </h3>
  <p>
    The authentication model used by API follows the OAuth2 specification,
    defined by
    <a href="https://tools.ietf.org/html/rfc6749%5D">RFC 6749</a>.
  </p>
  <p>
    The tokens followed the JWT pattern with specific claims for AME ecosystem:
  </p>
  <script src="https://gist.github.com/GustavoBezerra/409dba0e8ec8f7359d05932b6de91711.js"></script>
  <p>
    To get a token you must follow an authentication flux named
    <code>client_credentials</code>, where with a <code>client_id</code> and
    <code>client_secret</code>, the application receive a token. Using it, you
    can use safely Ame Digital API's. The credentials <code>client_id</code> and
    <code>client_secret</code> can acquire by formal contact with our
    represents.
  </p>
  <br />
  <p>
    All endpoints need to have <code>Authorization</code> in Header, with a
    <code>Bearer {ACCESS_TOKEN}</code>. This token can be received in the
    endpoint <code>/api/auth/oauth/token</code>.
  </p>
  <p>
    All tokens have an expiration time, and after that, the API's will return
    status code
    <code>401</code>.
  </p>
</section>
<br />
<br />
<section id="token">
  <h2>
    How to acquire an access token
  </h2>
  <p>
    The access token represents the necessary credentials for use Ame Digital
    APIs, below you can see how to acquire an access token:
  </p>

  <br />
  <div class="table-responsive">
    <table class="table table-bordered">
      <tbody>
        <tr>
          <th class="table-active text-center bg-light" colspan="2">
            <span class="badge badge-primary">POST</span>
            https://api.hml.amedigital.com/api/auth/oauth/token
          </th>
        </tr>
        <tr class="striped">
          <th class="table-active" colspan="2">
            HEADER PARAMETERS:
          </th>
        </tr>
        <tr>
          <th>
            Authorization:
            <br />
            <code>required</code>
          </th>
          <td>
            <code>string</code>
            <br />
            Authorization Basic with <code>client_id</code> and
            <code>client_secret</code> received from Ame Digital. For example:
            <br />
            <code
              >curl --user {client_id}:{client_secret} -H 'Content-Type:
              application/x-www-form-urlencoded' -d
              grant_type=client_credentials
              https://api.hml.amedigital.com/api/auth/oauth/token</code
            >
          </td>
        </tr>
        <tr>
          <th class="table-active" colspan="2">
            REQUEST BODY SCHEMA:
            <code>application/x-www-form-urlencoded</code>
          </th>
        </tr>
        <tr>
          <th>grant_type</th>
          <td>
            <code>string</code>
            <br />
            Always use <code>client_credentials</code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <br />
  <h5>Responses</h5>
  <br />
  <div class="acoordion" id="accordion200Token">
    <div class="card">
      <div
        class="card-header bg-ame-success text-success"
        data-toggle="collapse"
        data-target="#collapse200Token"
        aria-expanded="true"
        aria-controls="collapse200Token"
        id="heading200Token"
      >
        <b>200</b> Authentication success
      </div>
      <div
        id="collapse200Token"
        class="collapse show"
        aria-labelledby="heading200Token"
        data-parent="#accordion200Token"
      >
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>token_type</th>
                  <td>
                    <code>string</code>
                    <br />
                    It will always be Bearer
                  </td>
                </tr>
                <tr>
                  <th>expires_in</th>
                  <td>
                    <code>integer (int64)</code>
                    <br />
                    Expiration time in seconds
                  </td>
                </tr>
                <tr>
                  <th>access_token</th>
                  <td>
                    <code>string</code>
                    <br />
                    Access token
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div
        class="card-header bg-ame-danger text-danger"
        id="heading400Token"
        data-toggle="collapse"
        data-target="#collapse400Token"
        aria-expanded="true"
        aria-controls="collapse400Token"
      >
        <b>400</b> Request parameters invalid
      </div>
      <div
        id="collapse400Token"
        class="collapse show"
        aria-labelledby="heading400Token"
      >
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classification of error
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Error description
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div
        class="card-header bg-ame-danger text-danger"
        id="heading401Token"
        data-toggle="collapse"
        data-target="#collapse401Token"
        aria-expanded="true"
        aria-controls="collapse401Token"
      >
        <b>401</b> Not authorized, access denied
      </div>
      <div
        id="collapse401Token"
        class="collapse show"
        aria-labelledby="heading401Token"
      >
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classification of error
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Error description
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div
        class="card-header bg-ame-danger text-danger"
        id="heading403Token"
        data-toggle="collapse"
        data-target="#collapse403Token"
        aria-expanded="true"
        aria-controls="collapse403Token"
      >
        <b>403</b> You don't have permission for this action
      </div>
      <div
        id="collapse403Token"
        class="collapse show"
        aria-labelledby="heading403Token"
      >
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classification of error
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Error description
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div
        class="card-header bg-ame-danger text-danger"
        id="heading405Token"
        data-toggle="collapse"
        data-target="#collapse405Token"
        aria-expanded="true"
        aria-controls="collapse405Token"
      >
        <b>405</b> Method not allowed
      </div>
      <div
        id="collapse405Token"
        class="collapse show"
        aria-labelledby="heading405Token"
      >
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classification of error
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Error description
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div
        class="card-header bg-ame-danger text-danger"
        id="heading500Token"
        data-toggle="collapse"
        data-target="#collapse500Token"
        aria-expanded="true"
        aria-controls="collapse500Token"
      >
        <b>5XX</b> Internal server error, try again. If the problem persists,
        contact technical support
      </div>
      <div
        id="collapse500Token"
        class="collapse show"
        aria-labelledby="heading500Token"
      >
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classification of error
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Error description
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<br />
<br />
