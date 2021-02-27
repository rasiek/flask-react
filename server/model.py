from ariadne import QueryType, MutationType
from uuid import uuid4

query = QueryType()
mutation = MutationType()

orders = []


@mutation.field("orderCoffee")
def resolve_order_coffee(_, info, size, name, type):
    newOrder = Coffee(size, name, type)
    orders.append(newOrder)
    return newOrder


@query.field("hello")
def resolve_hello(_, info):
    return "Hi there"


@query.field("orders")
def resolve_orders(_, info):
    return orders


class Coffee:

    def __init__(self, size, name, coffee_type) -> None:
        self.size = size
        self.name = name
        self.type = coffee_type
        self.id = uuid4()
