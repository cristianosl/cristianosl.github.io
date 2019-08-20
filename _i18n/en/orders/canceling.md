
<section id="cancelandoOrdem">
  <h3>Canceling an order</h3>
  <br />
  <p>
    If an authorization has been made, the customer balance has been
    provisioned (reserved). If for any reason the seller cancels
    this order, he must cancel the authorization at Ame Digital. If
    this process does not occur, the customer's balance will remain
    stuck.
  </p>
  <br />
  <div class="table-responsive">
    <table class="table table-bordered">
      <tbody>
        <tr>
          <th class="table-active text-center bg-light" colspan="2">
            <span class="badge badge-info">PUT</span>
            https://api.hml.amedigital.com/api/wallet/user/payments/{id}/cancel
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
            Example: <code>Bearer Token {ACCESS_TOKEN}</code> <br />
            Access token format <code>token_type</code> +
            <code>access_token</code> (Token type always is
            <b>Bearer</b>)
          </td>
        </tr>
        <tr>
          <th class="table-active" colspan="2">PATH PARAMETERS</th>
        </tr>
        <tr>
          <th>
            id
            <br />
            <code>required</code>
          </th>
          <td>
            <code>string (uuid)</code>
            <br />
            Example:
            <code>ff363bcb-0db4-41e8-83ce-2ef01eaf95e0</code> <br />
            Authorization order ID
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <br />
  <h5>Responses</h5>
  <br />
  <div class="acoordion" id="accordionExample">
    <div class="card">
      <div class="card-header bg-ame-success text-success" id="heading200Cancel" data-toggle="collapse"
        data-target="#collapse200Cancel" aria-expanded="true" aria-controls="collapse200Cancel">
        <b>200</b> Order canceled successfully
      </div>
      <div id="collapse200Cancel" class="collapse show" aria-labelledby="heading200Cancel">
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
                  <th>id</th>
                  <td>
                    <code>string (uuid)</code>
                    <br />
                    Order ID
                  </td>
                </tr>
                <tr>
                  <th>ttl</th>
                  <td>
                    <code>string (date-time)</code>
                    <br />
                    Expiration date
                  </td>
                </tr>
                <tr>
                  <th>title</th>
                  <td>
                    <code>string</code>
                    <br />
                    Order title
                  </td>
                </tr>
                <tr>
                  <th>description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Order description
                  </td>
                </tr>
                <tr>
                  <th>type</th>
                  <td>
                    <code>string (OrderType)</code>
                    <br />
                    Enum: <code>"TRANSFER"</code>
                    <code>"PAYMENT"</code> <br />
                    Type of order
                  </td>
                </tr>
                <tr>
                  <th>currency</th>
                  <td>
                    <code>string (CurrencyType)</code>
                    <br />
                    Coin on model
                    <a href="https://pt.wikipedia.org/wiki/ISO_4217">ISO 4217</a>. <br />
                    Always is <code>BRL</code>
                  </td>
                </tr>
                <tr>
                  <th>amount</th>
                  <td>
                    <code>integer (int64)</code>
                    <br />
                    Order amount in cents. For example:
                    <code>R$ 19,77</code> must be expressed like
                    <code>1977</code> cents
                  </td>
                </tr>
                <tr>
                  <th>attributes</th>
                  <td>
                    <code>object</code>
                    <br />
                    Attributes of order
                  </td>
                </tr>
                <tr>
                  <th>qrCodeLink</th>
                  <td>
                    <code>string</code>
                    <br />
                    URL to QRCode
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading400Cancel" data-toggle="collapse"
        data-target="#collapse400Cancel" aria-expanded="true" aria-controls="collapse400Cancel">
        <b>400</b> Request parameters invalid
      </div>
      <div id="collapse400Cancel" class="collapse show" aria-labelledby="heading400Cancel">
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
      <div class="card-header bg-ame-danger text-danger" id="heading401Cancel" data-toggle="collapse"
        data-target="#collapse401Cancel" aria-expanded="true" aria-controls="collapse401Cancel">
        <b>401</b> Not authorized, access denied
      </div>
      <div id="collapse401Cancel" class="collapse show" aria-labelledby="heading401Cancel">
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
      <div class="card-header bg-ame-danger text-danger" id="heading403Cancel" data-toggle="collapse"
        data-target="#collapse403Cancel" aria-expanded="true" aria-controls="collapse403Cancel">
        <b>403</b> You don't have permission for this action
      </div>
      <div id="collapse403Cancel" class="collapse show" aria-labelledby="heading403Cancel">
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
                  >
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
      <div class="card-header bg-ame-danger text-danger" id="heading405Cancel" data-toggle="collapse"
        data-target="#collapse405Cancel" aria-expanded="true" aria-controls="collapse405Cancel">
        <b>405</b> Method not allowed
      </div>
      <div id="collapse405Cancel" class="collapse show" aria-labelledby="heading405Cancel">
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
      <div class="card-header bg-ame-danger text-danger" id="heading500Cancel" data-toggle="collapse"
        data-target="#collapse500Cancel" aria-expanded="true" aria-controls="collapse500Cancel">
        <b>5XX</b> Internal server error, try again. If the problem
        persists, contact technical support
      </div>
      <div id="collapse500Cancel" class="collapse show" aria-labelledby="heading500Cancel">
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