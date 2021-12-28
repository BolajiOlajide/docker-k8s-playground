# Simple K8s

## Commands

* To apply changes from your configuration files, use the `kubectl` command

```sh
kubectl apply -f client-pod.yaml
```

* To get the pods in the cluster

```sh
kubectl get pods
```

* To get services in the cluster

```sh
kubectl get services
```

* Get detailed info about an object

```sh
kubectl describe <object_type> <object_name>
```

Omitting the `object_name` returns all information about the object_type that exists on that cluster.

* Remove an object

```sh
kubectl delete -f <client-pod.yaml
```
