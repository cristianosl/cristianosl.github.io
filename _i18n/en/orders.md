<section id="ordens">
  <h2>
    Orders
  </h2>
  <br />
  <h4>Flux of orders</h4>
  <img class="img-fluid" src="/assets/imgs/fluxo_ordem_en_us.png" />
  <br />
  <br />
  <br />
  <p>
    Orders are events executed by the wallet to provide users with
    various functions. Each order has a life cycle from creation to
    completion. When an order is born it can reach 2 (two) different
    statuses which are:
  </p>

  <ul>
    <li>
      <code>DENIED</code>: The order was denied by the wallet, for
      different reasons.
    </li>
    <li>
      <code>AUTHORIZED</code>: The order has been accepted by the
      wallet and is awaiting a confirmation of capture or
      cancellation.
    </li>
  </ul>

  <p>
    Once the order has been authorized, it may proceed to the status
    of <code>CAPTURED</code>.
  </p>
  <p>
    After the order is captured, it can move to 5 (five) different
    statuses that are:
  </p>

  <ul>
    <li>
      <code>SUCCESS</code>: Order accepted and successfully
      completed. It means all charges have been made..
    </li>
    <li>
      <code>CANCELED</code>: The order was successfully created,
      authorized and captured, but for external reasons, it must be
      canceled and all charges undone.
    </li>
    <li>
      <code>HOLD</code>: The order is awaiting a external processing
      for its completion, usually it occurs with credit card
      refunded whose Ame Digital awaits confirmation from the
      banking system.
    </li>
    <li>
      <code>REFUNDED</code>: The order has been captured but the
      user wishs to receive back part of value or the total value of
      the order placed.
    </li>
    <li>
      <code>ERROR</code>: An unexpected error occurred while
      processing the transaction, consider this transaction as
      <code>DENIED</code>. Ame Digital will make sure to undo any
      inconsistencies..
    </li>
  </ul>
  <br />
  {% tf orders/create.md %}
  {% tf orders/auth.md %}
  {% tf orders/capturing.md %}
  {% tf orders/searching.md %}
  {% tf orders/canceling.md %}
  {% tf orders/refunding.md %}
</section>
<br />
<br />